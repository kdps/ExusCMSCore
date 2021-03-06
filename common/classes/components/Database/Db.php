<?php

class db {

	private static $link = null;
	private static $query = null;
	private static $params = null;
	
	public $time_start;
	public $time_end;
	
	/**
	 * pdo init
	 *
	 * @param  string args->db
	 * @param  string args->user
	 * @param  string args->password
	 * @param  array  args->setting
	 * @param boolean args->catchError
	 *
	 * @return pdo
	 */
	public static function run(\stdClass $args) {
		
		//args init
		if (isset($args->localhost)) {
			$localhost = $args->localhost;
		} else {
			$localhost = "localhost";
		}
		
		if (isset($args->db)) {
			$db = $args->db;
		} else {
			die("Invalid database name");
		}
		
		if (isset($args->user)) {
			$user = $args->user;
		} else {
			die("Invalid username");
		}
		
		if (isset($args->password)) {
			$password = $args->password;
		} else {
			die("Invalid password");
		}
		
		$catchError = $args->catch_err;
		
		if (isset($args->setting)) {
			$set = isset($args->localhost) ? $args->setting : array();
		} else {
			$set = array();
		}
		
		if (!isset($set)) {
			$set = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'", PDO::ATTR_ERRMODE=> PDO::ERRMODE_EXCEPTION);
		}
		
		//connect
		if ($catchError == true) {
			try {
				$dns = ('mysql:' . implode(';', isset($db) ? [
					'dbname=' . $db,
					'host=' . $localhost
				] : [
					'host=' . $localhost
				]));
				
				$pdo = new PDO($dns, $user, $password, array(
					PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'",
					PDO::ATTR_TIMEOUT => 5,
					PDO::ATTR_ERRMODE=> PDO::ERRMODE_EXCEPTION,
					PDO::ATTR_EMULATE_PREPARES=>FALSE
				));
				
				self::$link = $pdo;
				return $pdo;
			} catch (Exception $e) {
				throw new Exception($e->getMessage().', 에러메시지 : '.self::getCodeMsg($e));
			}
		} else {
			$pdo = new PDO("mysql:host=$localhost;dbname=$db",$user,$pass,$set);
			$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
			return $pdo;
		}
	}
	
	public static function Column_Export(array $column, $type) {
		$query = null;
		
		if ($type == null) {
			if ($column[3]=='[]') {
				$i = 0;
				$in_query = "";
				foreach($column[4] as $key => $value) {
					$i++;
					$in_query = $in_query . ':' .$i . ', ';
				}
				
				if (isset($in_query)) {
					$in_query = substr($in_query, 0, -2);
				} else {
					$in_query = "";
				}
				
				$column[3] = $in_query;
				$query .= "$column[1] $column[2] ($column[3]) ";
			} else {
				$query .= "$column[1] $column[2] $column[3] ";
			}
		} else {
			if ($type=='ORDER') {
				if (isset($column[3])) {
					$query .= "$column[3] ORDER BY $column[1] $column[2]";
				} else {
					$query .= "ORDER BY $column[1] $column[2]";
				}
			} else if ($type=='LIMIT') {
				if (!isset($column[1])) {
					$query .= "LIMIT $column[1]";
				} else if (isset($column[4])) {
					$query .= "LIMIT $column[1], $column[3]";
				} else if (isset($column[2])) {
					$query .= "LIMIT $column[1], $column[2]";
				}
			} else {
				$query .= "$column[1] $column[2] $column[3] $column[0] ";
			}
		}
		
		return $query;
	}
	
	public static function getCreateQuery($table, array $column, $primaryKey = null, $uniqueKey = array(), array $key = array()) {
		$query = "CREATE TABLE `$table` ";
		/*
		
			CREATE TABLE ${column} (
				${variables_name}, ${type}, ${size} _[optical], ${unsigned} _[optical] ${charset}, ${collate}, ${notnull}, ${autoincrement}, ${default}, 
			)

		*/
		unset($in_query);
		
		foreach($column as $columnData) {
			if ($in_query) $in_query .= ", ";
			
			if (is_array($columnData)) {
				$vcolumn = $columnData['column'];
				$in_query .= "`$vcolumn` ";
				
				if (isset($columnData['type'])) {
					$type = $columnData['type'];
				} else {
					unset($type);
				}
				
				if (isset($columnData['size'])) {
					$size = $columnData['size'];
				} else {
					unset($size);
				}
				
				if ($type == 'text' || $type == 'date' || $type == 'longtext') {
					$in_query .= "$type";
				} else {
					$in_query .= "$type ($size) ";
				}
				
				if (isset($columnData['notnull'])) {
					$notnull = $columnData['notnull'];
				} else {
					unset($notnull);
				}
				
				if (isset($notnull)) {
					$in_query .= "$notnull ";
				}
					
				if (isset($columnData['autoincrement'])) {
					$autoincrement = $columnData['autoincrement'];
				} else {
					unset($autoincrement);
				}
				
				if (isset($autoincrement) && $autoincrement === true) {
					$in_query .= "AUTO_INCREMENT ";
				}
				
				if (isset($columnData['charset'])) {
					$charset = $columnData['charset'];
				} else {
					unset($charset);
				}
				
				if (isset($charset)) {
					$in_query .= "CHARACTER SET $charset ";
				}
				
				if (isset($columnData['collate'])) {
					$collate = $columnData['collate'];
				} else {
					unset($collate);
				}
				
				if (isset($collate)) {
					$in_query .= "COLLATE $collate ";
				}
				
				if (isset($columnData['default'])) {
					$default = $columnData['default'];
				} else {
					unset($default);
				}
				
				if (isset($default)) {
					$in_query .= "DEFAULT $default ";
				}
			}
		}
		
		if ($primaryKey) {
			$in_query .= ", PRIMARY KEY (`$primaryKey`)";
		}
		
		if (is_array($uniqueKey) && count($uniqueKey) > 0) {
			$uniqueKeyKey = $uniqueKey['key'];
			$uniqueKeyName = $uniqueKey['name'];
			$in_query .= ", UNIQUE KEY `$uniqueKeyKey` (`$uniqueKeyName`)";
		}
		
		return "$query($in_query)";
	}
	
	public static function getQuery($DML, $table, array $column, $columns = null, $alias = null) {
		$query = null;
		$params = null;
		$useWhere = false;
		$bindparams = array();
		
		foreach ($column as $key => $val) {
			$Conditions = $val[0];
			if (count($column[0]) > 1 && ($Conditions === "" || $Conditions === "AND" || $Conditions === "OR")) {
				$useWhere = true;
				break;
			}
		}
		
		switch (strtoupper($DML)) {
			case "SELECT":
				$query = "$DML $columns FROM $table ";
				if ($alias) {
					$query .= "AS $alias ";
				}
				
				if ($useWhere) {
					$query .= "WHERE ";
				}
				break;
			case "DELETE":
				$query = "DELETE FROM $table WHERE ";
				break;
			case "UPDATE":
				$query = "UPDATE $table SET ";
				break;
			case "INSERT":
				$query = "INSERT INTO $table ";
				break;
			default:
				die(
					json_encode(
						array(
							"type" => "invalid query mode",
							"mode" => $mode,
							"description" => self::getCodeMsg($e)
						)
					)
				);
				break;
		}
		
		foreach($column as $key=>$val) {
			if (is_array($val)) {
				$params .= " ".self::Column_Export($val, $val[0]);
				if (isset($val[4])) {
					if ($val[0] == 'LIMIT') {
						$bindparams = array_merge($bindparams, array($val[1] => $val[2]));
						$bindparams = array_merge($bindparams, array($val[3] => $val[4]));
					} else {
						if (isset($val[5])) {
							$bindparams = array_merge($bindparams, array($val[3] => $val[4], 'ISnull' => $val[5]));
						}
						else
						{
							$bindparams = array_merge($bindparams, array($val[3] => $val[4]));
						}
					}
				}
			}
		}
		
		$prepared_query = $query.$params;
		
		self::$params = $bindparams;
		self::$query = $prepared_query;
		
		return $prepared_query;
	}
	
	public static function getCodeMsg($e) {
		$errCode = $e->errorInfo[1];
		$errCodeParams = preg_match_all("|(?:\')(.*)(?:\')|U", $e->errorInfo[2], $matches);
		if (isset($matches)) {
			$errCodeParams = $matches[1];
		}
		
		$msg = "";
		switch($errCode) {
			case "1004":
				$msg = sprintf("%s 파일을 정상적으로 생성할 수 없습니다.", $errCodeParams[0]);
				break;
			case "1005":
				$msg = sprintf("%s 테이블을 정상적으로 생성할 수 없습니다.", $errCodeParams[0]);
				break;
			case "1006":
				$msg = sprintf("%s 데이터베이스를 생성할 수 없습니다. (%s 라인)", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1007":
				$msg = sprintf("%s 데이터베이스는 이미 존재하기 때문에 생성할 수 없습니다.", $errCodeParams[0]);
				break;
			case "1008":
				$msg = sprintf("%s 데이터베이스가 존재하지 않아 제거할 수 없습니다.", $errCodeParams[0]);
				break;
			case "1009":
				$msg = sprintf("%s 데이터베이스를 제거할 수 없습니다 (%s 라인).", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1010":
				$msg = sprintf("%s 데이터베이스 디렉토리를 제거할 수 없습니다 (%s 라인).", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1011":
				$msg = sprintf("%s 데이터베이스 파일을 제거할 수 없습니다 (%s 라인).", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1012":
				$msg = "시스템 테이블 내의 레코드를 읽을 수 없습니다.";
				break;
			case "1013":
				$msg = sprintf("%s 상태를 읽어올 수 없습니다. (%s 라인)", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1014":
				$msg = sprintf("작업중인 디렉토리에는 접근할 수 없습니다 (%s 라인)", $errCodeParams[0]);
				break;
			case "1015":
				$msg = sprintf("잠겨진 파일에는 접근할 수 없습니다 (%s 라인)", $errCodeParams[0]);
				break;
			case "1016":
				$msg = sprintf("%s 파일은 작업중이므로 접근할 수 없습니다 (%s 라인)", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1017":
				$msg = sprintf("%s 파일을 찾을 수 없습니다 (%s 라인)", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1018":
				$msg = sprintf("%s 폴더를 읽을 수 없습니다 (%s 라인)", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1019":
				$msg = sprintf("%s 폴더를 변경할 수 없습니다 (%s 라인)", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1020":
				$msg = sprintf("%s 테이블에서 마지막 읽기 이후로 레코드가 변경되었습니다.", $errCodeParams[0]);
				break;
			case "1021":
				$msg = sprintf("디스크 용량이 부족합니다 (현재 디스크 점유율 : %s)", $errCodeParams[0]);
				break;
			case "1022":
				$msg = sprintf("%s 테이블에서 중복키는 작성할 수 없습니다.", $errCodeParams[0]);
				break;
			case "1023":
				$msg = sprintf("%s를 닫는 도중에 오류가 발생하였습니다 (라인 %s)", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1024":
				$msg = sprintf("%s 파일을 읽어오는 도중에 오류가 발생하였습니다 (라인 %s)", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1025":
				$msg = sprintf("%s 파일의 이름을 %s에서 %s로 변경하는 도중에 오류가 발생하였습니다 (라인 %s)", $errCodeParams[0], $errCodeParams[1], $errCodeParams[2]);
				break;
			case "1026":
				$msg = sprintf("%s 파일을 쓰는 도중에 오류가 발생하였습니다 (라인 %s)", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1027":
				$msg = sprintf("%s 파일이 변경금지상태입니다.", $errCodeParams[0]);
				break;
			case "1028":
				$msg = "정렬이 중단되었습니다.";
				break;
			case "1029":
				$msg = sprintf("%s의 %s 뷰(View)가 존재하지 않습니다", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1030":
				$msg = sprintf("저장소 엔진에서 %s 오류가 발생하였습니다", $errCodeParams[0]);
				break;
			case "1031":
				$msg = sprintf("%s의 테이블 저장소 엔진에는 이옵션이 존재하지 않습니다.", $errCodeParams[0]);
				break;
			case "1032":
				$msg = sprintf("%s에서 레코드를 찾을 수 없습니다.", $errCodeParams[0]);
				break;
			case "1033":
				$msg = sprintf("%s파일에서 잘못된 정보를 발견하였습니다.", $errCodeParams[0]);
				break;
			case "1034":
				$msg = sprintf("%s 테이블에서 잘못된 키 파일을 발견하였습니다. 복구를 시도하십시오.", $errCodeParams[0]);
				break;
			case "1035":
				$msg = sprintf("%s 테이블에서 오래된 키 파일을 발견하였습니다. 복구를 시도하십시오.", $errCodeParams[0]);
				break;
			case "1036":
				$msg = sprintf("%s 테이블은 읽기전용입니다.", $errCodeParams[0]);
				break;
			case "1037":
				$msg = sprintf("메모리가 부족합니다. 서버를 재시작하고 다시 시도하십시오 (%d bytes 필요)", $errCodeParams[0]);
				break;
			case "1038":
				$msg = sprintf("정렬 메모리가 부족합니다. 서버 정렬 버퍼 크기(/etc/mysql/my.cnf의 sort_buffer_size)를 늘리십시오.", $errCodeParams[0]);
				break;
			case "1039":
				$msg = sprintf("%s 파일을 읽는 도중에 예기치 않은 EOF 발견 (라인 %s)", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1040":
				$msg = "지나치게 많은 접속량";
				break;
			case "1041":
				$msg = "메모리가 부족합니다. mysqld 또는 다른 프로세스가 사용 가능한 모든 메모리를 사용하고 있는지 확인하십시오. 그렇지 않은 경우 mysqld가 더 많은 메모리를 사용하거나 더 많은 스왑 공간을 추가할 수 있도록 'ulimit' 옵션을 사용해야 할 수 있습니다.";
				break;
			case "1042":
				$msg = "주소에 대한 호스트 이름을 가져올 수 없습니다.";
				break;
			case "1043":
				$msg = "잘못된 핸드쉐이크(Handshake).";
				break;
			case "1044":
				$msg = sprintf("%s@%s 계정이 %s 데이터베이스에 접근이 제한되었거나 데이터베이스에 접속할 수 없습니다.", $errCodeParams[0], $errCodeParams[1], $errCodeParams[2]);
				break;
			case "1045":
				$msg = sprintf("%s@%s 계정이 존재하지 않거나 접속 계정정보가 잘못되었습니다.", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1046":
				$msg = "데이터베이스가 선택되지 않았습니다.";
				break;
			case "1047":
				$msg = "알 수 없는 명령어입니다.";
				break;
			case "1048":
				$msg = sprintf("%s 컬럼값은 null이 될 수 없습니다(IS NOT null).", $errCodeParams[0]);
				break;
			case "1049":
				$msg = sprintf("%s는 알 수 없는 데이터베이스입니다.", $errCodeParams[0]);
				break;
			case "1050":
				$msg = sprintf("%s 테이블은 이미 존재합니다.", $errCodeParams[0]);
				break;
			case "1051":
				$msg = sprintf("%s는 알 수 없는 테이블입니다.", $errCodeParams[0]);
				break;
			case "1052":
				$msg = sprintf("%s의 %s 컬럼이 모호합니다.", $errCodeParams[0], $errCodeParams[1]);
				break;
			case "1053":
				$msg = "서버가 종료중입니다.";
				break;
			case "1054":
				$msg = sprintf("'%s'에서의 알 수 없는 컬럼 '%s'", $errCodeParams[1], $errCodeParams[0]);
				break;
			case "1055":
				$msg = sprintf("%s는 'GROUP BY'절 내부에 존재하지 않습니다", $errCodeParams[0]);
				break;
			case "1056":
				$msg = sprintf("%s로 그룹화할 수 없습니다.", $errCodeParams[0]);
				break;
			case "1057":
				$msg = "문장에 합산 함수 및 열에 동일 문장에 있음";
				break;
			case "1058":
				$msg = "열 개수가 값 개수와 일치하지 않음";
				break;
			case "1059":
				$msg = sprintf("식별자 이름 %s가 지나치게 깁니다.", $errCodeParams[0]);
				break;
			case "1060":
				$msg = sprintf("%s는 중복된 열 이름입니다", $errCodeParams[0]);
				break;
			case "1061":
				$msg = sprintf("%s는 중복된 키 이름입니다", $errCodeParams[0]);
				break;
			case "1062":
				$msg = sprintf("%s키의 %s 항목이 중복되었습니다.", $errCodeParams[0], $errCodeParams[0]);
				break;
			case "1063":
				$msg = sprintf("%s열에 잘못된 열 지정자를 지정하였습니다.", $errCodeParams[0]);
				break;
			case "1064":
				$msg = sprintf("%s라인 %d의 '%s' 근처에서 파싱 오류가 발생하였습니다.", $errCodeParams[0], $errCodeParams[1], $errCodeParams[2]);
				break;
			case "1146":
				$msg = sprintf("%s 테이블이 존재하지 않습니다.", $errCodeParams[0]);
				break;
			default:
				break;
		}
		
		return $msg;
	}
	
	public static function Compile($prepared_query) {
		try {
			$sth = self::$link->prepare($prepared_query);
		} catch(Exception $e) {
			die(
				json_encode(
					array(
						"type" => "prepared error",
						"query" => $prepared_query,
						"error_msg" => $e->getMessage(),
						"error_code" => $e->getCode(),
						"description" => self::getCodeMsg($e)
					)
				)
			);
		}
		
		return $sth;
	}
	
	public static function getOutput($sth, $select, $retType) {
		$e = new Exception();
		$trace = $e->getTrace();
		$last_call = $trace[1];
		$caller = "{$last_call['file']}:{$last_call['line']}:{$last_call['function']}";
		$mtime = microtime(); 
		$mtime = explode(" ",$mtime); 
		$mtime = $mtime[1] + $mtime[0]; 
		$starttime = $mtime; 
		$time_start = $starttime;
		
		$ret = self::Fetch($sth, $select);
		
		$mtime = microtime(); 
		$mtime = explode(" ",$mtime); 
		$mtime = $mtime[1] + $mtime[0]; 
		$endtime = $mtime; 
		$time_end = $endtime;
		$execution_time = ($time_end - $time_start);
		
		$base = new base();
		$base->setSlowQuery(self::$query, $execution_time, $caller);
		
		if ($retType === 'object') {
			$dbItem = new dbItem($ret, $sth);
			return $dbItem;
		} else {
			return $ret;
		}
	}
	
	public static function Query($mode, $table, array $column, $type, $select, $alias = null, $retType = null) {
		$Query = self::getQuery($mode, $table, $column, $type, $alias);
		$sth = self::Compile($Query);
		self::BindParams($sth, self::$params, $column);
		return self::getOutput($sth, $select, $retType);
	}
	
	public static function executeFetch($stm, $type) {
		switch ($type) {
			case 'all':
				$res = $stm->fetchAll(PDO::FETCH_ASSOC);
				break;
			case 'one':
				$res = $stm->fetch()[0];
				break;
			case 'self':
				$res = $stm->fetch(PDO::FETCH_ASSOC);
				break;
			case 'column':
				$res = $stm->fetchColumn(PDO::FETCH_ASSOC);
				break;
			case 'alias':
				$res = $stm->fetch(PDO::FETCH_NAMED);
				break;
			case 'number':
				$res = $stm->fetch(PDO::FETCH_NUM);
				break;
			case 'both':
				$res = $stm->fetch(PDO::FETCH_BOTH);
				break;
			case 'object':
				$res = $stm->fetch(PDO::FETCH_OBJ);
				break;
			default:
				$res = $stm->fetchAll(PDO::FETCH_ASSOC);
				break;
		}
		
		return $res;
	}
	
	public static function Fetch($stm, $type) {
		try {
			if ($stm->execute()) {
				if ($type === 'boolean') {
					return true;
				}
				
				$res = self::executeFetch($stm, $type);
				
				$stm->closeCursor();
				return $res;
			} else {
				return false;
			}
		} catch(\PDOException $e) {
			if (empty(self::$params)) {
				die(
					json_encode(
						array(
							"fetch type" => $type,
							"type" => "[Fetch Error] Parameter is empty",
							"query" => self::$query,
							"error_code" => $e->getMessage(),
							"error_code" => $e->getCode(),
							"erorr_code" => print_r($e),
							"parameter" => print_r(self::$params,true),
							"description" => self::getCodeMsg($e)
						)
					)
				);
			} else {
				die(
					json_encode(
						array(
							"fetch type" => $type,
							"type" => "Fetch error",
							"query" => self::$query,
							"error_code" => $e->getMessage(),
							"erorr_code" => $e->getCode(),
							"erorr_code" => print_r($e),
							"parameter" => print_r(self::$params,true),
							"description" => self::getCodeMsg($e)
						)
					)
				);
			}
		}
	}

	public static function BindParams($stm, array $ary, $column) {
		try {
			$BindRowNum = 0;
			if (isset($column[0][3]) && $column[0][3]=='[]') {
				foreach ($column[0][4] as $key => $value) {
					if (is_array($value)) {
						$value = array_values($value)[0];
					}
					
					$stm->bindValue(":" . ++$BindRowNum, $value);
				}
			} else {
				$isnull = "";
				if (isset($column[0][5])) {
					$isnull = $column[0][5];
				}
				
				foreach($ary as $key => $val) {
					if (is_numeric($val)) {
						$type = \PDO::PARAM_INT;
					} else if (is_bool($val)) {
						$type = \PDO::PARAM_BOOL;
					} else if (is_null($val)) {
						$type = \PDO::PARAM_null;
					} else if (is_string($val)) {
						$type = \PDO::PARAM_STR;
					} else {
						$type = false;
					}
					
					if ($type !== false) {
						$stm->bindValue("$key", $val, $type);
					}
				}
			}
		} catch(\PDOException $e) {
			die(
				json_encode(
					array(
						"type" => "BindParams error",
						"query" => self::$query,
						"error_code" => $e->getMessage(),
						"erorr_code" => $e->getCode(),
						"description" => self::getCodeMsg($e)
					)
				)
			);
		}
	}

	/**
	 * pdo transaction
	 */
	public static function begin() {
		self::$link->beginTransaction();
	}
	
	/**
	 * pdo commit
	 */
	public static function commit() {
		self::$link->commit();
	}
	
	/**
	 * pdo rollBack
	 */
	public static function undo() {
		self::$link->rollBack();
	}
	
}

class dbItem {
	
	function __construct($std, $sth) {
		$this->sth = $sth;
		if (!is_array($std)) {
			$this->result = $std;
		} else {
			if (count($std) < 1) {
				$this->result = array_shift($std);
			} else {
				$this->result = $std;
			}
		}
	}
	
	function columnCount() {
		return $this->sth->columnCount();
	}
	
	function rowCount() {
		return $this->sth->rowCount();
	}
	
	function column($column) {
		$data = $this->data();
		
		if (is_array($data)) {
			return array_column($data, $column);
		}
	}
	
	function getQueryString() {
		return $this->sth['queryString'];
	}
	
	function data($row = null) {
		if ($row == null) {
			return $this->result;
		} else {
			return $this->result[$row];
		}
	
	}
	
}

?>