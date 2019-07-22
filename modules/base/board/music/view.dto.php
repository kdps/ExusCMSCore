<?php 

class board_dto {
	
	public $module_id;
	public $list_count;
	public $document_count;
	public $page_start;
	public $page_end;
	public $xml_path;
	public $result;
	public $config;
	public $comment_list_count;
	public $cpage;
	public $comment_count;
	public $keyword;
	public $comment_page;
	public $type;
	public $tag;
	public $srl;
	public $page;
	
	function __construct()
	{
		
	}
	
	function setModuleID($module_id)
	{
		$this->module_id = $module_id;
	}
	
	function getModuleID()
	{
		return $this->module_id;
	}
	
	function setListCount($list_count)
	{
		$this->list_count = $list_count;
	}
	
	function getListCount()
	{
		return $this->list_count;
	}
	
	function setDocumentCount($list_count)
	{
		$this->document_count = $document_count;
	}
	
	function getDocumentCount()
	{
		return $this->document_count;
	}
	
	function setPageStart($page_start)
	{
		$this->page_start = $page_start;
	}
	
	function getPageStart()
	{
		return $this->page_start;
	}
	
	function setPageEnd($page_end)
	{
		$this->page_end = $page_end;
	}
	
	function getPageEnd()
	{
		return $this->page_end;
	}
	
	function setXMLPath($xml_path)
	{
		$this->xml_path = $xml_path;
	}
	
	function getXMLPath()
	{
		return $this->xml_path;
	}
	
	function setResult($result)
	{
		$this->result = $result;
	}
	
	function getResult()
	{
		return $this->result;
	}
	
	function setConfig($config)
	{
		$this->config = $config;
	}
	
	function getConfig()
	{
		return $this->config;
	}
	
	function setCommentListCount($comment_list_count)
	{
		$this->comment_list_count = $comment_list_count;
	}
	
	function getCommentListCount()
	{
		return $this->comment_list_count;
	}
	
	function setCpage($cpage)
	{
		$this->cpage = $cpage;
	}
	
	function getCpage()
	{
		return $this->cpage;
	}
	
	function setCommentCount($comment_count)
	{
		$this->comment_count = $comment_count;
	}
	
	function getCommentCount()
	{
		return $this->comment_count;
	}
	
	function setKeyword($keyword)
	{
		$this->keyword = $keyword;
	}
	
	function getKeyword()
	{
		return $this->keyword;
	}
	
	function setType($type)
	{
		$this->type = $type;
	}
	
	function getType()
	{
		return $this->type;
	}
	
	function setTag($tag)
	{
		$this->tag = $tag;
	}
	
	function getTag()
	{
		return $this->tag;
	}
	
	function setSrl($srl)
	{
		$this->srl = $srl;
	}
	
	function getSrl()
	{
		return $this->srl;
	}
	
	function setPage($page)
	{
		$this->page = $page;
	}
	
	function getPage()
	{
		return $this->page;
	}
	
}

?>