<?php

	abstract class controller_abstract extends alsonglyrics {
		
		public function setMessage($msg) {
			return $this->base->response("type", "success", "html", $msg);
		}
		
		public function getParam($var) {
			return $this->base->post_params($var);
		}
		
		public function getDecodedSrl() {
			return request::decodeBinaryNumberic($this->getParam('srl'));
		}
		
		public function getLyrics() {
			$lyrics = $this->queryObject->getLysicsFull($this->post_data->target, $this->post_data->srl);
			return htmlspecialchars_decode($lyrics);
		}
		
	}
	
?>