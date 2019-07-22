<?php

	class files_controller extends files_controller_abstract implements files_controllerInterface
	{
		
		function __construct() 
		{
			parent::getHandler(TRUE);
		}
		
		function init($args) 
		{
			$this->files = $args;
			
			return $this->files;
		}
		
		function getFileList() 
		{
			$fileSequence = $this->base->post_params('sequence');
			$moduleId = $this->base->post_params('module');
			$memberSrl = $this->base->getMemberSrl();
			
			if ($fileSequence) 
			{
				$oFileList = $this->modelObject->getFileList($fileSequence);
				if (is_array($oFileList)) 
				{
					echo json_encode($oFileList);
				}
			}
		}
		
		function deleteFile() 
		{
			$fileSrl = $this->base->post_params('target');
			$moduleId = $this->base->post_params('module');
			
			if (!$fileSrl || !$moduleId) return;
			
			if (!$this->hasGrant($fileSrl)) return;
			
			$attachedFileInfo = $this->modelObject->getFile($moduleId, $fileSrl)->data();
			
			if (count($attachedFileInfo) > 0)
			{
				$attachedFileInfo = $attachedFileInfo[0];
				
				if (array_key_exists('target', $attachedFileInfo)) 
				{
					$uploadedFileSrl = $attachedFileInfo['target'];
				}
				else
				{
					return;
				}
				
				if (array_key_exists('files', $attachedFileInfo)) 
				{
					$uploadedFileName = $attachedFileInfo['files'];
				}
				else
				{
					return;
				}
				
				$filePath = sprintf('%s%s%s/%s', __DIR, __FILE__ATTACH, $uploadedFileSrl, $uploadedFileName);
				
				if (file_exists($filePath)) 
				{
					unlink($filePath);
					
					$this->modelObject->deleteFileColumn($fileSrl);
					
					$requestParams = array(
						"type" => "success",
						"fileSrl" => $fileSrl
					);
					
					echo json_encode($requestParams);
				}
				else
				{
					$requestParams = array();
					
					echo json_encode($requestParams);
				}
			}
		}
		
		function uploadExtraFile($target_srl, $extraKey)
		{
			$args = va::args();
			$args->path = array(__DIR.__EXTRA__ATTACH.$target_srl);
			$args->mode = 0755;
			dir::make($args);
			
			$attachedFileInfo = $_FILES[$extraKey];
			
			$attachedFileSize = $attachedFileInfo['size'];
			$attachedFileName = $attachedFileInfo['name'];
			$attachedTmpFile = $attachedFileInfo['tmp_name'];
			
			if ($attachedFileSize < 1 || !is_uploaded_file($attachedTmpFile)) 
			{
				return;
			}
			
			$extraFileInfo = $this->modelObject->getExtraFileByKey($target_srl, $extraKey);
			$attachedFilePath = $extraFileInfo['files'];
			
			if (file_exists($attachedFilePath))
			{
				unlink($attachedFilePath);
				
				$generatedFileName = str::getRandomHex();
				
				while (file_exists($generatedFileName))
				{
					$generatedFileName = str::getRandomHex();
				}
			
				$sourceFileExtension = substr(strrchr($attachedFileName, '.'), 1);
				$sourceFileName = sprintf("%s.%s", $generatedFileName, $sourceFileExtension);
				$uploadPath = sprintf('%s%s%s', __DIR, __EXTRA__ATTACH, $target_srl);
				$uploadFileName = sprintf("%s/%s", $uploadPath, $sourceFileName);
				
				if (move_uploaded_file($attachedTmpFile, $uploadFileName))
				{
					$this->modelObject->updateExtraFile($sourceFileName, $uploadFileName, $target_srl, $extraKey);
				}
			}
			else
			{
				$generatedFileName = str::getRandomHex();
				
				while(file_exists($generatedFileName))
				{
					$generatedFileName = str::getRandomHex();
				}
				
				if (preg_match('/\.(png|jpe?g|gif|svg|mp3|mp4|zip|gz)(\?.*)?$/i', $attachedFileName, $matches)) 
				{
					$sourceFileExtension = substr(strrchr($attachedFileName, '.'), 1);
					$uploadPath = sprintf('%s%s%s', __DIR, __EXTRA__ATTACH, $target_srl);
					$uploadFileName = sprintf("%s/%s.%s", $uploadPath, $generatedFileName, $sourceFileExtension);
					$targetFileName = sprintf("%s.%s", $generatedFileName, $sourceFileExtension);
					
					if (move_uploaded_file($attachedTmpFile, $uploadFileName)) 
					{
						if (file_exists($uploadFileName))
						{
							$this->modelObject->insertExtraFileList($target_srl, $extraKey, $uploadFileName, $targetFileName);
						}
					}
				}
			}
		}
		
		function uploadFile() 
		{
			$fileSequence = $this->base->post_params('sequence');
			$moduleId = $this->base->post_params('module');
			$memberSrl = $this->base->getMemberSrl();
			
			if (!$fileSequence) 
			{
				if (isset($_SESSION['target_srl'])) 
				{
					$fileSequence = $_SESSION['target_srl'];
				} 
				else 
				{
					$this->modelObject->insertFileSequence($memberSrl);
					
					$fileSequence = $this->modelObject->getFileSequence()->data();
					
					$_SESSION['target_srl'] = $fileSequence;
				}
			}
			
			if ($fileSequence) 
			{
				$args = va::args();
				$args->path = array(
					sprintf("%s%s%s", __DIR, __FILE__ATTACH, $fileSequence)
				);
				$args->mode = 0755;
				dir::make($args);
			
				$attachedFileInfo = $_FILES['upload'];
				$attachedFileName = $attachedFileInfo['name'];
				$attachedFileSize = $attachedFileInfo['size'];
				$attachedTmpFile = $attachedFileInfo['tmp_name'];
				
				$sourceFileExtension = substr(strrchr($attachedFileName, '.'), 1);
					
				if ($attachedFileSize < 1 || !is_uploaded_file($attachedTmpFile)) return;
			
				$generatedFileName = str::getRandomHex();
				while(file_exists($generatedFileName))
				{
					$generatedFileName = str::getRandomHex();
				}
				
				$uploadPath = sprintf('%s%s%s', __DIR, __FILE__ATTACH, $fileSequence);
				
				if (!is_dir($uploadPath))
				{
					$args = va::args();
					$args->path = array($uploadPath);
					$args->mode = 0755;
					dir::make($args);
				}
				
				if (preg_match('/\.(png|jpe?g|gif|svg|mp3|mp4|zip|gz)(\?.*)?$/i', $attachedFileName, $matches)) 
				{
					$uploadFileName = sprintf("%s/%s.%s", $uploadPath, $generatedFileName, $sourceFileExtension);
					
					if (file_exists($uploadFileName))
					{
						return;
					}
					
					if (move_uploaded_file($attachedTmpFile, $uploadFileName)) 
					{
						$sourceFileName = sprintf("%s.%s", $generatedFileName, $sourceFileExtension);
						$uploadURLPath = sprintf('.%s%s', __FILE__ATTACH, $fileSequence);
						$uploadedFileUrl = sprintf("%s/%s.%s", $uploadURLPath, $generatedFileName, $sourceFileExtension);
						
						if (file_exists($uploadFileName))
						{
							$memberSrl = $this->base->getMemberSrl();
							$attachedFileInfo = $_FILES['upload'];
							$attachedFileName = $attachedFileInfo['name'];
							
							$this->modelObject->insertFileList($fileSequence, $sourceFileName, $attachedFileName, $moduleId);
							
							$fileSrl = $this->modelObject->getRecentFileSrl($moduleId, $fileSequence);
							
							$requestParams = array(
								"type" => "success",
								"uploaded" =>1,
								"fileName" => $attachedFileName, 
								"url" => $uploadedFileUrl, 
								"sequence" => $fileSequence, 
								"memberSrl" => $memberSrl,
								"fileSrl" => $fileSrl
							);
							
							header::file_json();
							echo json_encode($requestParams);
						}
					}
				}
			}
		}
		
	}
?>