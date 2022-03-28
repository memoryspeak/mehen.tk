<?php

session_start();

require_once "../php/db_connect.php";

$inputVerificationCode = $_POST["inputVerificationCode"];
$inputUsername = $_POST["inputUsername"];
$inputEmail = $_POST["inputEmail"];

$token = unserialize($_COOKIE['uid'])['token'];
$rating = unserialize($_COOKIE['uid'])['rating'];
$date_created = unserialize($_COOKIE['uid'])['date_created'];


if ($inputVerificationCode && $inputUsername && $inputEmail) {
    try {
        $upload_user_array = array('username' => $inputUsername);
        $upload_user = $db_connect->prepare("SELECT * FROM `users` WHERE `username` = :username");
        $upload_user->execute($upload_user_array);
        $verification_result = $upload_user->fetchAll();

        if ($verification_result[0]['verification_code'] == $inputVerificationCode) {
            $update_user = $db_connect->prepare("UPDATE `users` SET `verification` = :verification WHERE `username` = :username");
            $update_user->execute(array('verification' => '1', 'username' => $inputUsername));
            if ($token != "" && $rating != "" && $date_created != "") {
                $setcookie_array = array('token' => $token, 'username' => $inputUsername, 'rating' => $rating, 'date_created' => $date_created, 'verification' => '1');
                setcookie("uid", serialize($setcookie_array), time()+3600, "/");
            };
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
