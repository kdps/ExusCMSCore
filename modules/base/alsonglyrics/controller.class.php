<?php

	if(!defined("__FLOWER__")) exit();

	class alsonglyrics_controller  extends controller_abstract implements controllerInterface  {
		
		function getAudiolyrics() {
			$request = new request();
			
			$this->post_data = new stdClass();
			$this->post_data->module = $this->getParam(__MODULEID);
			$this->post_data->srl = $this->getDecodedSrl();
			$this->post_data->target = $this->getParam('target');
			
			$lyrics = $this->getLyrics();
			
			// If has lyric
			if ($lyrics) {
				// Check XML (strLyric) Attributes
				preg_match_all(
					'|(?:<strLyric>)([[\/]?[\d]{2}:[\d]{2}.[\d]{2}\].*)(?:<br>)(?:</strLyric>)|U', 
					$lyrics, 
					$output
				);
				
				if (!isset($output) || !isset($output[1][0])) {
					return;
				}
				
				if ($output[1][0]) {
					// Remove empty items
					$lyrics = preg_replace(
						"/[[\/]?(00):(00).(00)\]<br>/U",
						'', 
						$output[1][0].'<br>'
					);
					
					// Convert to time
					$lyrics = preg_replace(
						"/[[\/]?([\d]{2}):([\d]{2}).([\d]{2})\](.*)<br>/U",
						'<div ms="$3" timestamp="$1:$2">$4</div>', 
						$lyrics.'<br>'
					);
					
					// Convert to seconds
					$lyrics = preg_replace_callback(
						'/"([\d]{2}):([\d]{2})"/', 
						function($m) {
							return date($m[1] * 60 + $m[2]);
						}, $lyrics
					);
					
					// Convert to minutes
					$lyrics = preg_replace_callback(
						'/"([\d]{2})"/', 
						function($m) {
							return (int)($m[1]);
						}, $lyrics
					);
					
					return $this->setMessage($lyrics);
				} else {
					// Get file list by document srl
					$file_list = $this->getFileList($srl);
					
					foreach ($file_list as $fileInfo) {
						// If extension type of file is audio
						if (maya::execute('@\@!mp3||wav!', $fileInfo['files'], 'boolean')) {
							$filename = sprintf("%s%s%s/%s", __DIR, __FILE__ATTACH, $fileInfo['target'], $fileInfo['files']);
							
							// If file exists
							if (file_exists($filename)) {
								// Get md5 hash of audio file
								$md5 = $this->board->model->getMD5Hash($filename);
								if ($md5) {
									// insert lyrics if found md5 hash
									$lysics = $this->board->model->getLysics($md5);
									$this->board->query->insertLysics('index', $srl, $lysics);
								}
							}
						}
					}
					
					return $this->setError($this->board->lang['notfoundlyrics']);
				}
			}
		}
		
		
	}
?>