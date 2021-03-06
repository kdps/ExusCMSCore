<?php

	if(!defined("__FLOWER__")) exit();

	class search_view extends search 
	{
		
		function __construct() 
		{
			$this->init = new stdClass();
			$this->init->model = new init_model();
		}
		
		function init($args) 
		{
			$this->base = new base();
			$this->pdo = $this->base->getPDO();

			$this->search = new stdClass;
			$this->search->module = $args->module;
			
			return $this->search;
		}
		
		function search() 
		{
			$oBoardQuery = $this->base->getQuery('music');
			
			$this->search->list_count = 20;
			$this->search->page = $this->base->get_params('page') ? $this->base->get_params('page') : 1;
			$this->search->keyword = $this->base->get_params('keyword');
			$this->search->page_start = ($this->search->page - 1) * $this->search->list_count;
			$this->search->query = $oBoardQuery->getAllDocumentListbyColumn($this->search->page_start, $this->search->keyword, 'title');
			
			foreach ($this->search->query as $key => $val) 
			{
				$this->searchitem = new search_item($this, $val);
				$this->search->search_list[$val['srl']] = $this->searchitem;
			}
			
			$this->search->count = $oBoardQuery->getAllDocumentListbyColumnCount($this->search->keyword,'title');
			$this->search->page_navigation = new Pagenation($this->search->page, $this->search->count, $this->search->list_count);
			$this->search->page_count = $this->search->page_navigation->getLastPage();
			
			$this->base->set('skin', sprintf("%s/search.php", $this->search->tpl_path));
			
		}
		
	}
?>