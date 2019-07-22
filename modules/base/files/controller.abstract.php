<?php

	abstract class files_controller_abstract extends files 
	{
		
		public function hasGrant($fileSrl)
		{
			$memberSrl = $this->base->getMemberSrl();
			$uploadedMemberSrl = $this->modelObject->getFileSequenceBySrl($fileSrl)['member_srl'];
			
			if ($memberSrl != $uploadedMemberSrl) 
			{
				return false;
			}
				
			return true;
		}
		
	}

?>