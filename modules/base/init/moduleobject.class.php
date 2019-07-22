<?php

class ModuleObject extends BaseObject {
	
	public $dtoObject;
	public $modelObject;
	public $viewObject;
	public $controllerObject;
	public $queryObject;
	
	function __construct() {
		$this->base = new base();
	}
	
	function getCommonTpl($tpl) {
		return sprintf("%s/tpl/%s", __MOD, $tpl);
	}
	
	function getTpl($tpl) {
		$reflectClass = new ReflectionClass($this);
		$directory = dirname($reflectClass->getFilename());
		return sprintf("%s/tpl/%s", $directory, $tpl);
	}
	
	function setTpl($tpl) {
		$reflectClass = new ReflectionClass($this);
		$directory = dirname($reflectClass->getFilename());
		$this->base->set('skin', sprintf("%s/tpl/%s", $directory, $tpl));
	}
	
	function setDTO($dtoObject) {
		$this->dtoObject = $dtoObject;
	}
	
	function setModel($modelObject) {
		$this->modelObject = $modelObject;
	}

	function setView($viewObject) {
		$this->viewObject = $viewObject;
	}
	
	function getQuery() {
		return $this->queryObject;
	}
	
	function setQuery($queryObject) {
		$this->queryObject = $queryObject;
	}
	
}

?>