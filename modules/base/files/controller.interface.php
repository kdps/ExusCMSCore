<?php
	
	interface files_controllerInterface 
	{
		
		public function __construct();
		public function init($args);
		public function getFileList();
		public function deleteFile();
		public function uploadExtraFile($target_srl, $extraKey);
		public function uploadFile();
		
	}

?>