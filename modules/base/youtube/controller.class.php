<?php

	if(!defined("__FLOWER__")) exit();

	class youtube_controller extends youtube
	{
		
		protected $pdo;
		
		public function cronJob() {
			$youtubeID = "UCNGLum1Lx0nDD2sNBGQ-V1Q";
			$apiKey = "AIzaSyBiEBtzIXl4q8m9hnpfeoShCD9FSZHrpvE";
			$this->youtube->model->setAPIKey($apiKey);
			$data = $this->youtube->model->getChannelStatics($youtubeID);
			
			$readedCount = $this->youtube->model->getChannelViewCounts($youtubeID, $data);
			
		}
		
	}
?>