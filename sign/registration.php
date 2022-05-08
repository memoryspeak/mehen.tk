<?php
session_start();

$db_ini_array = parse_ini_file('../db.ini');
require_once "../php/db_connect.php";

$inputUsername = $_POST["inputUsername"];
$inputPassword = md5($_POST["inputPassword"]);
$inputEmail = $_POST["inputEmail"];

if ($inputUsername && $inputPassword && $inputEmail) {
    try {
        $time = time();
        $microtime = microtime();
        $date = date('Y-m-d H:i:s', $time);
        $token = md5($time.$username_reg.$email.$microtime);
        $verification_code = md5($token.$time);
        $upload_user_array = array('username' => $inputUsername, 'email' => $inputEmail, 'password' => $inputPassword, 'token' => $token, 'rating' => 1500, 'date_created' => $date, 'verification' => 0, 'verification_code' => $verification_code, 'online' => 1, 'latest_date_online' => $date);
        $upload_user = $db_connect->prepare("INSERT INTO `users` (`username`, `email`, `password`, `token`, `rating`, `date_created`, `verification`, `verification_code`, `online`, `latest_date_online`) VALUES (:username, :email, :password, :token, :rating, :date_created, :verification, :verification_code, :online, :latest_date_online)");
        $upload_user->execute($upload_user_array);

        setcookie("token", $token, time()+3600*24*360, "/");

        header('Location: verification.php');
    } catch(PDOException $exception) {
        $inWhatColIsError = explode("'", explode(": ", $exception -> getMessage())[2])[3];
        if ($inWhatColIsError == "username") {
            $showUsernameHelp = 'true';
            $showEmailHelp = 'false';
            include_once "registration.html";
        } elseif ($inWhatColIsError == "email") {
            $showUsernameHelp = 'false';
            $showEmailHelp = 'true';
            include_once "registration.html";
        } else {
            $showUsernameHelp = 'false';
            $showEmailHelp = 'false';
            include_once "/error/error.php";
        };
    };
} else {
    $showUsernameHelp = 'false';
    $showEmailHelp = 'false';
    include_once "registration.html";
};
?>
