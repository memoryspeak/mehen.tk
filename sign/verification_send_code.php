<?php

session_start();

$db_ini_array = parse_ini_file('../db.ini');
require_once "../php/db_connect.php";

$inputVerificationCode = $_POST["inputVerificationCode"];
$inputUsername = $_POST["inputUsername"];
$inputEmail = $_POST["inputEmail"];

if ($inputVerificationCode && $inputUsername && $inputEmail) {
    try {
        $upload_user_array = array('username' => $inputUsername);
        $upload_user = $db_connect->prepare("SELECT * FROM `users` WHERE `username` = :username");
        $upload_user->execute($upload_user_array);
        $verification_result = $upload_user->fetchAll();

        if ($verification_result[0]['verification_code'] == $inputVerificationCode) {
            $update_user = $db_connect->prepare("UPDATE `users` SET `verification` = :verification WHERE `username` = :username");
            $update_user->execute(array('verification' => '1', 'username' => $inputUsername));

            setcookie("token", $verification_result[0]['token'], time()+3600, "/");
            $_SESSION['verification'] = '1';

            header('Location: thank_you_page.php');
        } else {
            $_SESSION['verification_try_again'] = "true";
            header('Location: verification.php');
        };
    } catch(PDOException $exception) {
        include_once "/error/error.php";
    };
} else {
    header('Location: verification.php');
};
?>
