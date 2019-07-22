<?php

class MultimediaPlayer
{
	
	function transHTML($status, $args, $script)
	{
		if(!defined("__FLOWER__")) exit();

		if ($status !== 'before') return;
		if (!isset($script->object)) return;
		if ($script->object !== 'audio' && $script->object !== 'video') return;
		
		$this->base = $args->base;
		
		$document_srl = (int)$this->base->get_params('srl');
		if (!$document_srl || $document_srl <= -1) return;
		
		$oBoardQuery = $this->base->getQuery('music');
		$oDocument = $oBoardQuery->getDocumentItem($document_srl);
		
		$oFileModel = $this->base->getModel('files');
		$fileSequence = $oFileModel->getDocumentFileSequence($document_srl);
		$FileList = $oFileModel->getFileList($fileSequence);
			
		if (isset($FileList)) {
			$oFileModel = $this->base->getModel('files');
			$fileSequence = $oFileModel->getDocumentFileSequence($document_srl);
			$FileList = $oFileModel->getFileList($fileSequence);
			
			foreach($FileList as $key => $fileInfo) {
				if (maya::execute('@\@!jpg||png||gif||jpeg!', $fileInfo['files'], 'boolean')) {
					$image_url = sprintf("%s%s%s/%s", __SUB, __FILE__ATTACH, $fileInfo['target'], $fileInfo['files']);
				} else if (maya::execute('@\@!mp3||wav!', $fileInfo['files'], 'boolean')) {
					$audio_url = sprintf("%s%s%s/%s", __SUB, __FILE__ATTACH, $fileInfo['target'], $fileInfo['files']);
				} else if (maya::execute('@\@!mp4||avi!', $fileInfo['files'], 'boolean')) {
					$audio_url = sprintf("%s%s%s/%s", __SUB, __FILE__ATTACH, $fileInfo['target'], $fileInfo['files']);
				}
			}
		} else {
			$audio_url = $script->attrs->src;
		}
		
		if(!isset($audio_url)) return;
		
		if(!isset($image_url)) {
			$image_url = 'common/img/ext/audio.png';
		}
		
		$this->base->addJS("/components/MultimediaPlayer/tpl/js/exusplayer.js","head");
		$this->base->addCSS("/components/MultimediaPlayer/tpl/css/exusplayer.css");
		
		$this->base->set('title', $oDocument['title']);
		$this->base->set('lyricssrl', request::encodeBinaryNumberic($oDocument['srl']));
		$this->base->set('audio_url', $audio_url);
		$this->base->set('image_url', $image_url);
		if (maya::execute('@\@!mp4||avi!', $audio_url, 'boolean')) {
			$this->base->set('isVideo', true);
		} else {
			$this->base->set('isVideo', false);
		}
		
		$skin = __COMPONENTS."/MultimediaPlayer/tpl/player.php";
		
		ob_start();
					
		if(isset($skin))
		{
			if(file_exists($skin))
			{
				@include($skin);
			}
			else
			{
				if($required) die("invalid skin");
			}
		}
		
		$include = ob_get_clean();
		return $include;
	}
}
?>