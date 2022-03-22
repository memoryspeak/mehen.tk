<?php
session_start();

require_once "../php/db_connect.php";
//require_once "../php/get_users.php";

try {
    $all_users = $db_connect->prepare("SELECT `username` FROM `users`");
    $all_users->execute();
    include_once "registration.html";
} catch(PDOException $exception) {
    //$_SESSION['all_users'] = $exception;
    //echo $exception -> getMessage();
    include_once "/error/error.php";
};
?>
