<?php

class youtube_model extends youtube {
	
	private $APIKey;
	protected $pdo;
	
	function __construct() {
		$this->base = new base();
		$this->pdo = $this->base->getPDO();
	}
	
	function insertYoutuberColumn($module, $target_srl, $lysics) {
		$sth = $this->pdo->prepare("INSERT INTO def_lysics (target_srl, lysics, module) VALUES (:target_srl, :lysics, :module)");
		$sth->bindParam(':target_srl', $target_srl, PDO::PARAM_INT);
		$sth->bindParam(':lysics', $lysics, PDO::PARAM_STR);
		$sth->bindParam(':module', $module, PDO::PARAM_STR);
		$sth->execute();
	}
	
	function insertLog($channelId, $readedCount) {
		return db::Query('INSERT','def_youtube_log',
		[
			['', 'channel_id', '=', ':args1', $channelId],
			['', 'readed_count', '=', ':args2', $readedCount]
		],'', 'boolean');
	}
	
	function updateCategorySrl($target, $value) {
		return db::Query('UPDATE','def_category',
		[
			['WHERE', 'category_srl', '=', ':args1', $value],
			['', 'category_srl', '=', ':args2', $target]
		],'', 'boolean');
	}
	

}
?>