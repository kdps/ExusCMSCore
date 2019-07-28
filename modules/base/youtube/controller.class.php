<?php

class youtube_controller extends youtube {
	
	protected $pdo;
	
	public function cronJob() {
		$youtubeID = "";
		$apiKey = "";
		$this->youtube->model->setAPIKey($apiKey);
		$data = $this->youtube->model->getChannelStatics($youtubeID);
		
		$readedCount = $this->youtube->model->getChannelViewCounts($youtubeID, $data);
		
	}
	
}
?>