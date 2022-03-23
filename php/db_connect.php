<?php
$db_ini_array = parse_ini_file('../db.ini');

$db_host = $db_ini_array["db_host"];
$db_user = $db_ini_array["db_user"];
$db_pass = $db_ini_array["db_pass"];
$db_name = $db_ini_array["db_name"];

try {
    $db_connect = new PDO("mysql:host={$db_host};dbname={$db_name}",$db_user,$db_pass);
    $db_connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //$connect->exec('SET NAMES "utf8"');
} catch(PDOException $exception) {
    echo $exception->getMessage();
};

?>
