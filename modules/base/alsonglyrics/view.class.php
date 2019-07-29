<?php

	if(!defined("__FLOWER__")) exit();

	class alsonglyrics_view extends alsonglyrics{
			
		function __construct(){
			$this->base = new base();
			$this->pdo = $this->base->getPDO();
		}
		
	}
	
?>