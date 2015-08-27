<?php
	header("Content-type:text/plain;charset = utf-8");
	$staff = array
	(
		array("name" => "Jack","number" => "100","sex" => "Men","job" => "manager"), 
		array("name" => "Daivl","number" => "101","sex" => "Men","job" => "enginer"),
		array("name" => "Honey","number" => "102","sex" => "Women","job" => "manager")

	);

	if ($_SERVER["REQUEST_METHOD"] == "GET") {
		search();
	} else if ($_SERVER["REQUEST_METHOD"] == "POST"){
		create();
	} 
	function search(){
		if (!isset($_GET["number"]) || empty($_GET["number"])) {
			echo "error";
			return;
		}
		global $staff;
		$number = $_GET["number"];
		$result = "can't found";
		foreach ($staff as $value) {
			if ($value["number"] == $number) {
				$result = "staff number :".$value["number"].",staff name :".$value["name"].
				",staff sex :".$value["sex"].",job : ".$value["job"];
				break;
			}
		}
		echo $result;
	}

	function create(){
		if (!isset($_POST["name"]) || empty($PSOT["name"])
		|| !isset($_POST["number"]) || empty($PSOT["number"])
		|| !isset($_POST["sex"]) || empty($PSOT["sex"])
		|| !isset($_POST["job"]) || empty($PSOT["job"])) {
			echo "error";
			return;
		}
		echo "staff".$_POST["name"]."save success";
	}
?>
