<?php 

	class alsonglyrics_query extends alsonglyrics {
		
		function __construct() {
			$this->alsonglyrics = new stdClass;
			$this->base = new base();
			$this->pdo = $this->base->getPDO();
		}
		
		function getLysicsCount($module, $target_srl) {
			return db::Query('SELECT','def_lysics',[
				['AND', 'target_srl', '=', ':args1', $target_srl],
				['', 'module', '=', ':args2', $module]
			],'count(*)', 'one', '', 'object');
		}

		function getLysicsFull($module, $srl) {
			if ($this->getLysicsCount($module, $srl)->data() > 0) {
				return db::Query('SELECT', 'def_lysics', [
					['AND', 'target_srl', '=', ':args1', $srl],
					['', 'module', '=', ':args2', $module]
				],'lysics', 'one');
			}
		}

		function insertLysics($module, $target_srl, $lysics) {
			$sth = $this->pdo->prepare("INSERT INTO def_lysics (target_srl, lysics, module) VALUES (:target_srl, :lysics, :module)");
			$sth->bindParam(':target_srl', $target_srl, PDO::PARAM_INT);
			$sth->bindParam(':lysics', $lysics, PDO::PARAM_STR);
			$sth->bindParam(':module', $module, PDO::PARAM_STR);
			$sth->execute();
		}
		
	}

?>