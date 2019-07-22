<?php

class extravars_item extends board
{
	
	function __construct($query = array()) {
		$this->query = $query;
		$this->base = new base();
	}
	
	function get($args) {
		return $this->query[$args];
	}
	
	function getInputTag() {
		switch($this->getType()) {
			default:
				$html = "<input style=\"width:100%\" type=\"text\" class=\"text itx\" name=\"{$this->getName()}\" value=\"{$this->getValue()}\"></input>";
				break;
			case "option":
				$options = explode(",", $this->getDefault());
				foreach($options as $val) {
					$html .= "<option ".(($this->getValue() == $val) ? "selected " : "")."value=\"{$val}\">{$val}</option>";
				}
				
				$html = "<select name=\"{$this->getName()}\">{$html}</select>";
				break;
			case "textarea":
				$html = "<textarea rows=\"4\" cols=\"50\" name=\"{$this->getName()}\" value=\"{$this->getValue()}\">{$this->getValue()}</textarea>";
				break;
			case "color":
				$html = "<input type=\"color\" name=\"{$this->getName()}\" value=\"{$this->getValue()}\">";
				break;
			case "date":
				$html = "<input type=\"date\" name=\"{$this->getName()}\" value=\"{$this->getValue()}\">";
				break;
			case "datetime-local":
				$html = "<input type=\"datetime-local\" name=\"{$this->getName()}\" value=\"{$this->getValue()}\">";
				break;
			case "month":
				$html = "<input type=\"month\" name=\"{$this->getName()}\" value=\"{$this->getValue()}\">";
				break;
			case "number":
				$html = "<input type=\"number\" name=\"{$this->getName()}\" value=\"{$this->getValue()}\">";
				break;
			case "password":
				$html = "<input type=\"password\" name=\"{$this->getName()}\" value=\"{$this->getValue()}\">";
				break;
			case "time":
				$html = "<input type=\"time\" name=\"{$this->getName()}\" value=\"{$this->getValue()}\">";
				break;
			case "week":
				$html = "<input type=\"week\" name=\"{$this->getName()}\" value=\"{$this->getValue()}\">";
				break;
			case "week":
				$html = "<input type=\"week\" name=\"{$this->getName()}\" value=\"{$this->getValue()}\">";
				break;
			case "file":
				$html = "<input type=\"file\" name=\"{$this->getName()}\" value=\"{$this->getValue()}\">";
				break;
			case "radio":
				$options = explode(",", $this->getDefault());
				foreach($options as $val) {
					$html .= "<input ".(($this->getValue() == $val) ? "checked " : "")."name=\"{$this->getName()}\" type=\"radio\" value=\"{$val}\">{$val}</input>";
				}
				
				break;
		}
		
		return $html;
	}
	
	function getDefault() {
		$default = $this->get('default');
		if (isset($default)) {
			return $default;
		}
		
		return "";
	}
	
	function getValue() {
		$type = $this->get('value');
		if (isset($type)) {
			return $type;
		}
		
		return "";
	}
	
	function getTargetSrl() {
		$type = $this->get('target_srl');
		if (isset($type)) {
			return $type;
		}
		
		return "";
	}
	
	function getAttachedFileName() {
		$type = $this->get('origin');
		if (isset($type)) {
			return $type;
		}
		
		return "";
	}
	
	function getName() {
		$type = $this->get('val');
		if (isset($type)) {
			return $type;
		}
		
		return "";
	}
	
	function getType() {
		$type = $this->get('type');
		if (isset($type)) {
			return $type;
		}
		
		return "";
	}
	
	function getTitle() {
		$title = $this->get('title');
		if (isset($title)) {
			return $title;
		} else {
			
		}
	}
	
}

?>
