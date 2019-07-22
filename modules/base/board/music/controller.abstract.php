<?php

	abstract class controller_abstract extends board 
	{
		
		public function setMessage($msg)
		{
			return $this->base->response("type", "success", "html", $msg);
		}
		
		public function redirectToCategorySetup()
		{
			$args = va::args();
			$args->location = str::getUrl('', __MODULEID, $this->post_data->module, 'act', 'dispBoardCategorySetup');
			header::move($args);
		}
		
		public function getLyrics()
		{
			return htmlspecialchars_decode($this->board->query->getLysicsFull($this->post_data->module, $this->post_data->srl));
		}
		
		public function insertCategory()
		{
			$this->board->query->insertCategory($this->post_data->ai, $this->post_data->type, $this->post_data->module, $this->post_data->name);
		}
		
		public function setError($errorMsg)
		{
			return $this->base->response("type", "error", "html", $errorMsg);
		}
		
		public function deleteCategory()
		{
			$this->board->query->deleteCategory($this->post_data->category_srl, $this->post_data->module);
		}
		
		public function getDecodedSrl()
		{
			return request::decodeBinaryNumberic($this->getParam('srl'));
		}
		
		public function getNextSequence()
		{
			return $this->board->query->getBoardSequence($this->post_data->mid);
		}
		
		public function setRedirectSrl()
		{
			$this->post_data->redirectSrl = 0;
			if (isset($this->post_data->lastID)) 
			{
				$this->post_data->redirectSrl = $this->post_data->lastID;
			}
			else
			{
				$this->post_data->redirectSrl = $this->post_data->srl;
			}
		}
		
		public function clearCache()
		{
			if (isset($this->post_data->mid)) 
			{
				unset($GLOBALS['__DOCUMENT__COUNT__QUERY__'.$this->post_data->mid]);
				
				if (isset($this->post_data->fileSequence))
				{
					$path = sprintf("%s%s/%d/*", __DIR, __THUMB__ATTACH, $this->post_data->fileSequence);
					dir::emptyFolder($path);
				}
			}
		}
		
		public function unsetFileSequence()
		{
			if (isset($_SESSION['target_srl']))
			{
				unset($_SESSION['target_srl']);
			}
		}
		
		public function getTitle()
		{
			$title = $this->getParam('title');
			$title = strip_tags($title);
			$title = urldecode($title);
			
			return $title;
		}
		
		public function hasTag()
		{
			if (isset($this->post_data->tag_list))
			{
				return true;
			}
			
			return false;
		}
		
		public function hasCategory()
		{
			if (isset($this->post_data->category_srl))
			{
				return true;
			}
			
			return false;
		}
		
		public function hasContent()
		{
			if (isset($this->post_data->content))
			{
				return true;
			}
			
			return false;
		}
		
		public function hasTitle()
		{
			if (isset($this->post_data->title))
			{
				return true;
			}
			
			return false;
		}
		
		public function hasSrl()
		{
			if (isset($this->post_data->srl))
			{
				if ($this->post_data->srl > 0 && $this->post_data->srl !== null)
				{
					return true;
				}
				
				return false;
			}
			
			return false;
		}
		
		public function getExtraKeyList()
		{
			return $this->board->query->getExtraVar($this->post_data->mid);
		}
		
		public function updateExtraVars()
		{
			$extraKeyTypes = $this->board->query->getAllExtraKeyType($this->post_data->mid)->column('val');
			
			foreach ($this->board->extraKeyList as $extraVars) 
			{
				$extraVarsKey = $extraVars['val'];
				$extraVarsType = $extraVars['type'];
				
				if (!in_array($extraVarsKey, $extraKeyTypes) || !isset($extraVarsKey))
				{
					continue;
				}
				
				$extraVarsVal = $this->getParam($extraVarsKey);
				
				if (isset($extraVarsVal) || ($extraVarsType == 'file' && isset($_FILES[$extraVarsKey]) && !empty($extraVarsKey) && is_uploaded_file($_FILES[$extraVarsKey]['tmp_name'])))
				{
					$extraVarsCount = $this->board->query->getInsertedExtraVarsCount($extraVarsKey, $this->post_data->srl);
					
					if ($extraVarsCount > 0)
					{
						if ($extraVarsType == 'file')
						{
							$oFileController = $this->base->getController("files");
							$oFileController->uploadExtraFile($this->post_data->srl, $extraVarsKey);
							
							continue;
						}
						
						$this->board->query->updateExtraVar($this->post_data->srl, $extraVarsKey, $extraVarsVal);
					}
					else
					{
						if ($extraVarsType == 'file')
						{
							$oFileController = $this->base->getController("files");
							$oFileController->uploadExtraFile($this->post_data->srl, $extraVarsKey);
							
							$this->board->query->insertExtraVar($this->post_data->srl, $extraVarsKey, 'attached');
							continue;
						}
						
						$this->board->query->insertExtraVar($this->post_data->srl, $extraVarsKey, $extraVarsVal);
					}
				}
			}
		}
		
		public function insertExtraVars()
		{
			$extraKeyTypes = $this->board->query->getAllExtraKeyType($this->post_data->mid)->column('val');
			
			foreach ($this->board->extraKeyList as $extraVars) 
			{
				$extraVarsKey = $extraVars['val'];
				
				if (!in_array($extraVarsKey, $extraKeyTypes) || !isset($extraVarsKey))
				{
					continue;
				}
				
				$extraVarsVal = $this->getParam($extraVarsKey);
				
				if (isset($extraVarsVal))
				{
					if ($extraVarsKey === 'file')
					{
						
					}
					
					$this->board->query->insertExtraVar($this->post_data->lastId, $extraVarsKey, $extraVarsVal);
				}
			}
		}
		
		public function redirectBySrl()
		{
			$args = va::args();
			$args->location = str::getUrl('', __MODULEID, $this->post_data->mid, 'srl', $this->post_data->redirectSrl);
			header::move($args);
		}
		
		public function insertDocumentItem()
		{
			$this->board->query->insertDocument(
				$this->post_data->title,
				$this->post_data->content,
				date("Ymdhis"),
				$this->post_data->nickname,
				$this->post_data->mid,
				$this->post_data->category_srl,
				$this->post_data->lastId,
				$this->post_data->fileSequence,
				$this->post_data->tag_list,
				$this->post_data->memberSrl
			);
		}
		
		public function updateDocument()
		{
			$this->board->query->updateDocument(
				$this->post_data->title,
				$this->post_data->content,
				date("Ymdhis"),
				$this->post_data->nickname,
				$this->post_data->mid,
				$this->post_data->category_srl,
				$this->post_data->srl,
				$this->post_data->fileSequence,
				$this->post_data->tag_list
			);
		}
		
		public function isValidFileSequence()
		{
			if (!isset($_SESSION['target_srl']))
			{
				return false;
			}
			
			if ($_SESSION['target_srl'] = $this->post_data->fileSequence)
			{
				return true;
			}
			
			return false;
		}
		
		public function isDocumentAuthor()
		{
			$oDocument = $this->board->query->getDocumentItem($this->post_data->srl);
			$memberSrl = $this->base->getMemberSrl();
			$documentMemberSrl = $oDocument['member_srl'];
			
			if ($memberSrl === $documentMemberSrl)
			{
				return true;
			}
			
			return false;
		}
		
		public function redirectToModule()
		{
			$args = va::args();
			$args->location = str::getUrl('', __MODULEID, $this->post_data->mid);
			header::move($args);
		}
		
		public function deleteAttachmentFiles()
		{
			$oFilesModel = $this->base->getModel('files');
			$oFilesModel->deleteAllAttachmentFiles($this->post_data->srl);
		}
		
		public function deleteDocumentItem()
		{
			$this->board->query->deleteDocument($this->post_data->srl, $this->post_data->mid);
		}
		
		public function getUserId()
		{
			return $this->base->getUserId();
		}
		
		public function isLogged()
		{
			return $this->base->isLogged();
		}
		
		public function hasGrant($hasAdmin)
		{
			return $this->base->hasGrant($hasAdmin);
		}
		
		public function updateArtist()
		{
			$this->board->query->UpdateArtist($this->post_data->srl, $this->post_data->md, $this->post_data->singer);
		}
		
		public function redirectToDocumentPage()
		{
			$args = va::args();
			$args->location = str::getUrl('', __MODULEID, $this->post_data->mid, 'srl', $this->post_data->srl);
			header::move($args);
		}
		
		public function getVotedCount()
		{
			return $this->board->query->getVotedCount($this->post_data->srl);
		}
		
		public function updateGenre()
		{
			$this->board->query->UpdateGenre($this->post_data->srl, $this->post_data->md, $this->post_data->genre);
		}
		
		public function getFileList($srl)
		{
			$oFilesModel = $this->base->getModel('files');
			$srl = $oFilesModel->getDocumentFileSequence($srl);
			return $oFilesModel->getFileList($srl);
		}
		
		public function getModuleConfigCount($module_setup)
		{
			$oModuleModel = $this->base->getModel('module');
			return $oModuleModel->getModuleConfigCount($module_setup);
		}
		
		public function getModuleConfig($module_setup)
		{
			$oModuleModel = $this->base->getModel('module');
			return $oModuleModel->getModuleConfig($module_setup);
		}
		
		public function insertModuleConfig($module_setup)
		{
			$oModuleModel = $this->base->getModel('module');
			$oModuleModel->insertModuleConfig($module_setup);
		}
		
		public function updateModuleConfig($module_setup, $config)
		{
			$oModuleModel = $this->base->getModel('module');
			$oModuleModel->updateModuleConfig($module_setup, $config);
		}
		
		public function updateModuleLayout($module_setup, $config)
		{
			$oModuleModel = $this->base->getModel('module');
			$oModuleModel->updateModuleLayout($module_setup, $config);
		}
		
		public function updateModuleTitle($module_setup, $config)
		{
			$oModuleModel = $this->base->getModel('module');
			$oModuleModel->updateModuleTitle($module_setup, $config);
		}
		
		public function viewLoginPage()
		{
			$oMemberView = $this->base->getView('member');
			return $oMemberView->dispMemberLogin();
		}
		
		public function getParam($var) 
		{
			return $this->base->post_params($var);
		}
		
	}

?>