<?php
$db_host = "127.0.0.1";
$db_user = "nuxa";
$db_pass = "memoryspeak";
$db_name = "mehendatabase";

try {
    $db_connect = new PDO("mysql:host={$db_host};dbname={$db_name}",$db_user,$db_pass);
    $db_connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    /*$connect->exec('SET NAMES "utf8"');*/
} catch(PDOException $exception) {
    echo $exception->getMessage();
};
?>
