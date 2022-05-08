<?php
session_start();

$db_ini_array = parse_ini_file('../db.ini');
require_once "../php/db_connect.php";

$inputUsername = $_POST["inputUsername"];
$inputPassword = md5($_POST["inputPassword"]);

if ($inputUsername && $inputPassword) {
    try {
        $upload_user_array = array('username' => $inputUsername, 'password' => $inputPassword);
        $upload_user = $db_connect->prepare("SELECT * FROM `users` WHERE `username` = :username AND `password` = :password");
        $upload_user->execute($upload_user_array);
        $verification_result = $upload_user->fetchAll();

        if ($verification_result[0]) {
            $update_user = $db_connect->prepare("UPDATE `users` SET `online` = :online WHERE `username` = :username");
            $update_user->execute(array('online' => '1', 'username' => $inputUsername));

            setcookie("token", $verification_result[0]['token'], time()+3600*24*360, "/");

            header('Location: /');
        } else {
            header('Location: sign.php');
        };
    } catch(PDOException $exception) {
            include_once "/error/error.php";
    };
} else {
    header('Location: sign.php');
};
?>
