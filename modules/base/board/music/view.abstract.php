<?php

abstract class view_abstract extends board {
	
	abstract function init($args);
	abstract function dispBoardModify();
	abstract function dispOriginContent();
	abstract function dispAlbumContent();
	abstract function dispBoardWrite();
	abstract function dispBoardSetup();
	abstract function dispBoardExtraSetup();
	abstract function dispBoardCategorySetup();
	abstract function dispBoardSkinSetup();
	abstract function dispBoardPlaylist();
	abstract function dispBoardPopular();
	abstract function dispBoardAuthor();
	abstract function dispBoardOrigin();
	abstract function dispBoardAlbum();
	abstract function dispBoardTag();
	abstract function dispBoardTagList();
	abstract function getCommentPage();
	abstract function dispBoardContent();
	
	public function getProperty() {
		$this->property = new stdClass;
		$this->property->default_action = "dispBoardContent";
		$this->property->private_action = array("CheckDocument", "CheckPage", "ajaxCall");
		$this->property->column_list = array('content', 'nick_name', 'no', 'title', 'category', 'readed', 'voted', 'download', 'cart', 'play', 'regdate');
		$this->property->column = array('no', 'category', 'title', 'play', 'regdate', 'readed', 'nick_name', 'voted');
		$this->property->sort_index_list = array('voted_count', 'readed_count', 'download_count', 'playtime', 'star_count', 'artist');
		$this->property->list_count_list = array('5', '10', '20', '40', '60', '100');
		
		return $this->property;
	}
	
	/**
	 * Check that document is exists
	 */
	public function isDocumentExists() {
		if (isset($this->board->document)) {
			return true;
		}
		
		return false;
	}
	
	/**
	 * Check that srl is exists
	 */
	public function isSrlExists() {
		if (isset($this->board->srl)) {
			return true;
		}
		
		return false;
	}
	
	/**
	 * Check that request type is ajax
	 */
	public function isAjaxRequest() {
		if ($this->board->isAjax === true) {
			return true;
		}
		
		return false;
	}
	
	/**
	 * Check that logged user is author of current document
	 */
	public function isDocumentAuthor() {
		$memberSrl = $this->base->getMemberSrl();
		$oDocumentMemberSrl = $this->board->document['member_srl'];
		if ($memberSrl === $oDocumentMemberSrl) {
			return true;
		}
		
		return false;
	}
	
	public function setDocumentTitle() {
		$this->base->set('document_title', $this->board->document['title']);
	}
	
	public function getCurrentCommentListCount() {
		return ($this->board->cpage - 1) * $this->board->comment_listcount;
	}
	
	public function getAllOriginAlbum() {
		return $this->queryObject->getAllOriginAlbum($this->board->album);
	}
	
	public function getOriginAlbumbysrl() {
		return $this->queryObject->getOriginAlbumbysrl($this->board->related);
	}
	
	public function updateReadedCount() {
		$this->queryObject->UpdateReadedCount($this->board->readed_count, $this->board->srl);
	}
	
	public function getSkinXmlContents() {
		if (file_exists($this->board->xml_path)) {
			return simplexml_load_string(file_get_contents($this->board->xml_path));
		}
		
		return null;
	}
	
	/**
	 * Get a current listcount
	 */
	public function getCurrentListCount() {
		return ($this->board->page - 1) * $this->board->list_count;
	}
	
	/**
	 * Get a readed count of current document
	 */
	public function getReadedCount() {
		return ++$this->board->document['readed'];
	}
	
	/**
	 * Set board tpl
	 */
	public function setBoardSkin() {
		$skin = $this->base->get('skin');
		$this->getContentRet($skin, 'board');
	}
	
	public function getDocumentCountbyCategory() {
		return $this->queryObject->getDocumentCountbyCategory($this->board->module_id, $this->getParam('category'));
	}
	
	public function getDocumentlistBetweenbyCategory() {
		return $this->queryObject->getDocumentlistBetweenbyCategory($this->board->module_id, $this->board->page_start, $this->board->list_count, $this->getParam('category'));
	}
	
	public function getDocumentlistBetweenbyCategoryArticle() {
		return $this->queryObject->getDocumentlistBetweenbyCategoryArticle($this->board->module_id, $this->board->page_start, $this->board->list_count, $this->board->category, $this->board->keyword, $this->board->type)->data();
	}

	public function getDocumentExtraVars() {
		include_once("extravars.item.class.php");
		$this->board->extraVarObject = new stdClass();
		
		if (!isset($this->board->srl)) {
			$targetSrl = $this->getParam(__MODULEID);
			$extraVars = $this->queryObject->getExtraVar($targetSrl);
		} elseif (isset($this->board->srl)) {
			$targetSrl = $this->board->srl;
			$extraVars = $this->queryObject->getExtraVars($targetSrl)->data();
		}
		
		if (!isset($extraVars)) {
			return new stdClass();
		}
		
		foreach($extraVars as $key => $val) {
			$extraVarsItem = new extravars_item($val);
			$this->board->extraVarObject->item[$key] = $extraVarsItem;
		}
		
		return is_array($this->board->extraVarObject) ? $this->board->extraVarObject : new stdClass();
	}
	
	public function getDocumentItem() {
		return $this->queryObject->getDocumentItem($this->board->srl);
	}
	
	public function getTagList() {
		return $this->queryObject->getTagList();
	}
	
	public function getDocumentCountbyTag() {
		return $this->queryObject->getDocumentCountbyTag($this->board->module_id, $this->board->tag);
	}
	
	public function getDocumentCountbyBoardId() {
		return $this->queryObject->getDocumentCountbyBoardId($this->board->module_id);
	}
	
	public function getPopularDocumentList() {
		return $this->queryObject->getPopularDocumentList($this->board->module_id, 0, $this->board->page_start, $this->board->list_count);
	}
	
	public function getDocumentlistBetweenbyGenre() {
		return $this->queryObject->getDocumentlistBetweenbyGenre($this->board->module_id, $this->board->page_start, $this->board->list_count, $this->board->genre);
	}
	
	public function getDocumentlistBetweenbyOriginTitle() {
		return $this->queryObject->getDocumentlistBetweenbyOriginTitle($this->board->module_id, $this->board->page_start, $this->board->keyword);
	}
	
	public function getDocumenCountbyOriginTitle() {
		return $this->queryObject->getDocumenCountbyOriginTitle($this->board->module_id, $this->board->page_start, $this->board->keyword);
	}
	
	public function getDocumentlistBetweenbyOriginAlbum() {
		return $this->queryObject->getDocumentlistBetweenbyOriginAlbum($this->board->module_id, $this->board->page_start, $this->board->keyword);
	}
	
	public function getDocumenCountbyOriginAlbum() {
		return $this->queryObject->getDocumenCountbyOriginAlbum($this->board->module_id, $this->board->page_start, $this->board->keyword);
	}
	
	public function getDocumentlistBetweenbyAuthor() {
		return $this->queryObject->getDocumentlistBetweenbyAuthor($this->board->module_id, $this->board->page_start, $this->board->keyword);
	}
	
	public function getDocumenCountbyAuthor() {
		return $this->queryObject->getDocumenCountbyAuthor($this->board->module_id, $this->board->page_start, $page_end, $this->board->keyword);
	}
	
	public function getDocumentlistBetweenbyTag() {
		return $this->queryObject->getDocumentlistBetweenbyTag($this->board->module_id, $this->board->page_start, $this->board->keyword);
	}
	
	public function getDocumenCountbyTag() {
		return $this->queryObject->getDocumenCountbyTag($this->board->module_id, $this->board->page_start, $page_end, $this->board->keyword);
	}
	
	public function getDocumentlistBetweenbyTitle() {
		return $this->queryObject->getDocumentlistBetweenbyTitle($this->board->module_id, $this->board->page_start, $this->board->keyword);
	}
	
	public function getDocumenCountbyTitle() {
		return $this->queryObject->getDocumenCountbyTitle($this->board->module_id, $this->board->page_start, $this->board->keyword);
	}
	
	public function getDocumentListbyColumn() {
		return $this->queryObject->getDocumentListbyColumn($this->board->module_id, $this->board->page_start, $this->board->keyword, $this->board->type);
	}
	
	public function getDocumenCountbyColumn() {
		return $this->queryObject->getDocumenCountbyColumn($this->board->module_id, $this->board->page_start, $this->board->keyword, $this->board->type);
	}
	
	public function getDocumentCountbyGenre() {
		return $this->queryObject->getDocumentCountbyGenre($this->board->module_id, $this->board->genre);
	}
	
	public function getDocumentListbyArticle($article) {
		return $this->queryObject->getDocumentListbyArticle($this->board->module_id, $this->board->page_start, $this->board->list_count, $article);
	}
	
	public function getVotedCommentList($moduleid, $srl, $cpage, $ccount) {
		$oCommentModel = $this->base->getModel('comment');
		
		return $oCommentModel->getVotedCommentList($moduleid, $srl, $cpage, $ccount);
	}
	
	public function getDocumentlistBetweenCategory() {
		return $this->queryObject->getDocumentlistBetweenCategory($this->board->module_id, $this->board->page_start, $page_end, $this->board->tag);
	}
	
	public function getTagRelatedDocumentSrl() {
		return $this->queryObject->getTagRelatedDocumentSrl($this->board->module_id, $this->board->document['tag']);
	}
	
	public function getDocumentListInDocumentSrls($documentSrls) {
		return $this->queryObject->getDocumentListInDocumentSrls($documentSrls, $this->board->module_id, $this->board->page_start);
	}
	
	public function getRelatedTagList($list_count) {
		return $this->queryObject->getRelatedTagList($this->board->module_id, $this->board->relatedTagList->currentTagIndex, $list_count, $this->board->document['tag']);
	}
	
	public function getBlamedCommentList($moduleid, $srl, $cpage, $ccount) {
		$oCommentModel = $this->base->getModel('comment');
		
		return $oCommentModel->getBlamedCommentList($moduleid, $srl, $cpage, $ccount);
	}
	
	public function getDocumentListGAP() {
		$startPage = 1;
		$endPage = $this->board->page_start > 1 ? $this->board->page_start : 1;
		$gapPagePrev = $this->modelObject->getGapInModule($startPage, $endPage, $this->board->module_id)->data();
		$this->board->page_start = $this->board->page_start + ($gapPagePrev);
	
		$startPage = $this->board->page_start > 1 ? $this->board->page_start : 1;
		$endPage = $this->board->page_end;
		$gapPageNext = $this->modelObject->getGapInModule($startPage, $endPage, $this->board->module_id)->data();
		$this->board->page_end = $this->board->page_end + ($gapPageNext) + ($gapPagePrev);
	}
	
	public function getDocumentListLEFTJOIN() {
		$documentList = $this->queryObject->getDocumentListLEFTJOIN($this->getParam(__MODULEID), $this->board->page_start, $this->board->board_count);
		
		return $documentList ? array_reverse($documentList) : [];
	}
	
	public function getDocumentListJOIN() {
		$documentList = $this->queryObject->getDocumentListJOIN($this->getParam(__MODULEID), $this->board->page_start, $this->board->board_count);
		
		return $documentList ? array_reverse($documentList) : [];
	}
			
	public function getDocumentListLIMIT() {
		return $this->queryObject->getDocumentListLIMIT($this->getParam(__MODULEID), $this->board->page_start, $this->board->board_count);
	}
	
	public function getCommentList() {
		$oCommentModel = $this->base->getModel('comment');
		
		return $oCommentModel->getCommentList($this->board->module_id, $this->board->srl, $this->board->comment_page, $this->board->comment_listcount);
	}
			
	public function getCommentCount($moduleid, $srl) {
		$oCommentModel = $this->base->getModel('comment');
		
		return $oCommentModel->getCommentCount($moduleid, $srl);
	}
	
	public function getDocumentCountbyCategoryArticle() {
		return $this->queryObject->getDocumentCountbyCategoryArticle($this->board->module_id, $this->getParam('category'), $this->board->keyword, $this->board->type);
	}
	
	public function setEditor() {
		$this->base->set('editor', $this->getEditor());
	}
	
	public function setDocumentWriteTplPath() {
		$this->base->set('skin', sprintf(__WRITE_TPL__, $this->board->skin_tpl_path));
	}
	
	public function setDeleteDocumentTplPath() {
		$this->base->set('skin', sprintf(__DELETE_TPL__, $this->board->skin_tpl_path));
	}
	
	public function getDocumentCommentCounts() {
		return $this->getCommentCount($this->board->module_id, $this->board->srl);
	}
	
	public function getPagenation() {
		return new Pagenation($this->board->page,  $this->board->list_count, $this->board->document_count);
	}
	
	public function getSrl() {
		return $this->getParam('srl');
	}
	
	public function getAlbum() {
		return $this->queryObject->getAlbum($this->board->page_start);
	}
	
	public function getCategoryList() {
		return $this->queryObject->getCategoryList($this->board->module_id);
	}
	
	public function getOriginAlbum() {
		return $this->queryObject->getOriginAlbum($this->board->page_start);
	}
	
	public function getModuleID() {
		return $this->getParam(__MODULEID);
	}
		
	public function getPopularFilesCount() {
		return $this->queryObject->getPopularFilesCount($this->board->module_id, $this->board->popular_count);
	}
	
	public function setTagTplPath() {
		$this->base->set('skin', sprintf(__TAG_TPL__, $this->board->skin_tpl_path));
	}
	
	public function setAuthorTplPath() {
		$this->base->set('skin', sprintf(__AUTHOR_TPL__, $this->board->skin_tpl_path));
	}
	
	public function getCurrentUserExtraVars() {
		$memberExtraVars = $this->queryObject->getMemberExvar($this->getUserId());
		return unserialize($memberExtraVars);
	}
	
	/**
	 * Set Tpl of Board Screen
	 */
	public function setBoardTplPath() {
		$this->base->set('skin', sprintf(__BOARD_TPL__, $this->board->skin_tpl_path));
	}
	
	/**
	 * Set Tpl of View Screen
	 */
	public function setViewTplPath() {
		$this->base->set('skin', sprintf(__VIEW_TPL__, $this->board->skin_tpl_path));
	}
	
	/**
	 * Set Tpl of Write Screen
	 */
	public function setWriteTplPath() {
		$this->base->set('skin', sprintf(__WRITE_TPL__, $this->board->skin_tpl_path));
	}
	
	/**
	 * Set Tpl of Album View Screen
	 */
	public function setAlbumViewTplPath() {
		$this->base->set('skin', sprintf(__ALBUM_VIEW_TPL__, $this->board->skin_tpl_path));
	}
	
	public function setAlbumTplPath() {
		$this->base->set('skin', sprintf(__ALBUM_TPL__, $this->board->skin_tpl_path));
	}
	
	public function setOriginTplPath() {
		$this->base->set('skin', sprintf(__ORIGIN_TPL__, $this->board->skin_tpl_path));
	}
	
	public function getCategoryListWithoutSubCategory() {
		return $this->queryObject->getCategoryListWithoutSubCategory($this->board->module_id);
	}
	
	public function getCurrentRelatedTagListPage() {
		return (int)ceil(($this->board->relatedTagList->currentTagIndex + $this->board->relatedTagList->list_count) / $this->board->relatedTagList->list_count);
	}
	
	public function getCommentListCount() {
		return $this->board->config->comment_count ? $this->board->config->comment_count : 20;
	}
	
	public function getCurrentCommentCPage() {
		return ($this->board->cpage - 1) * $this->board->comment_listcount;
	}
	
	public function getCommentCPage() {
		return $this->getParam('cpage') ? $this->getParam('cpage') : 1;
	}
	
	public function getPage() {
		return $this->getParam('page') ? $this->getParam('page') : 1;
	}
	
	public function getCategorySrl() {
		return $this->getParam('category') ? $this->getParam('category') : null;
	}
	
	public function getListCount() {
		$list_count = $this->board->config->list_count ? $this->board->config->list_count : 20;
		$list_count = $this->getParam('list_count') ? $this->getParam('list_count') : $list_count;
		
		return $list_count;
	}
	
	public function sortByStarCount() {
		$this->board->page_start = $this->getCurrentListCount();
		$this->board->result = $this->getDocumentListbyArticle("star");
	}
	
	public function sortByRegdate() {
		$this->board->page_start = $this->getCurrentListCount();
		$this->board->result = $this->getDocumentListbyArticle("regdate");
	}
	
	public function sortByCategory() {
		$this->board->page_start = $this->getCurrentListCount();
		$this->board->result = $this->getDocumentListbyArticle("category");
	}
	
	public function sortByVotedCount() {
		$this->board->page_start = $this->getCurrentListCount();
		$this->board->result = $this->getDocumentListbyArticle("voted");
	}
	
	public function sortByArtist() {
		$this->board->page_start = $this->getCurrentListCount();
		$this->board->result = $this->getDocumentListbyArticle("artist");
	}
	
	public function sortByPlaytime() {
		$this->board->page_start = $this->getCurrentListCount();
		$this->board->result = $this->getDocumentListbyArticle("playtime");
	}
	
	public function sortByReadedCount() {
		$this->board->page_start = $this->getCurrentListCount();
		$this->board->result = $this->getDocumentListbyArticle("readed");
	}
	
	public function sortByDownloadCount() {
		$this->board->page_start = $this->getCurrentListCount();
		$this->board->result = $this->getPopularDocumentList();
	}
	
	public function setTitleOriginList() {
		$this->board->document_count = $this->getDocumenCountbyOriginTitle();
		$this->board->page_start = $this->getCurrentListCount();
		$this->board->result = $this->getDocumentlistBetweenbyOriginTitle();
	}
	
	public function setAlbumOriginList() {
		$this->board->document_count = $this->getDocumenCountbyOriginAlbum();
		$this->board->page_start = $this->getCurrentListCount();
		$this->board->result = $this->getDocumentlistBetweenbyOriginAlbum();
	}
	
	public function setArtistList() {
		$this->board->document_count = $this->getDocumenCountbyAuthor();
		$this->board->page_start = $this->getCurrentListCount();
		$this->board->result = $this->getDocumentlistBetweenbyAuthor();
	}
	
	public function setTagList() {
		$this->board->document_count = $this->getDocumenCountbyTag();
		$this->board->page_start = $this->getCurrentListCount();
		$this->board->result = $this->getDocumentlistBetweenbyTag();
	}
	
	public function setTitleList() {
		$this->board->page_start = $this->getCurrentListCount();
		$this->board->document_count = $this->getDocumenCountbyTitle();
		$this->board->result = $this->getDocumentlistBetweenbyTitle();
	}
	
	public function setDocumentRange() {
		$query_count = $this->board->document_count - ($this->board->page * $this->board->list_count);
		
		$this->board->page_start = (int)$query_count > 0 ? $query_count : 0;
		$this->board->page_end = (int)$this->board->page_start + $this->board->list_count - 1;
		$this->board->board_count = (int)$query_count > 0 ? $this->board->list_count : $this->board->list_count + $query_count;
	}
	
	public function isDefaultXMLExists() {
		if (!isset($this->board->xml_path)) {
			return false;
		}
		
		if (file_exists($this->board->xml_path)) {
			return true;
		}
		
		return false;
	}
	
	public function setDefaultXMLPath() {
		$this->board->xml_path = $this->getTpl(__DEFAULT_XML__);
	}
	
	public function getModuleLayout() {
		return $this->queryObject->getModuleLayoutbyModuleID($this->board->module_id);
	}
	
	public function getFileList($srl) {
		$oFilesModel = $this->base->getModel('files');
		$fileSequence = $oFilesModel->getDocumentFileSequence($srl);
		$fileList = $oFilesModel->getFileList($fileSequence);
		
		return $fileList;
	}
	
	/**
	 * Get logged userid
	 */
	public function getUserId() {
		return $this->base->getUserId();
	}
	
	/**
	 * Check user is logged in
	 */
	public function isLogged() {
		return $this->base->isLogged();
	}
	
	/**
	 * Get a editor
	 */
	public function getEditor() {
		$oEditorView = $this->base->getView('editor');
		$editorContent = $oEditorView->getEditor();
		
		return $editorContent;
	}
	
	public function hasGrant($hasAdmin) {
		return $this->base->hasGrant($hasAdmin);
	}
	
	public function getParam($var) {
		return $this->base->get_params($var);
	}
	
}

?>