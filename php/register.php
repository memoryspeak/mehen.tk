<?php
session_start();
require_once 'db_connect.php';

$username_reg = $_POST['username_reg'];
$email = $_POST['email'];
$psw = md5($_POST['psw']);
$psw_repeat = md5($_POST['psw-repeat']);

if ($psw !== $psw_repeat) {
    $_SESSION['register_answer'] = "Passwords do not match. Try to register again.";
} else {
    try {
        $time = time();
        $microtime = microtime();
        $date = date('d.m.Y H:i:s', $time);
        $token = md5($time.$username_reg.$email.$microtime);
        $upload_user = $db_connect->prepare("INSERT INTO `users` (`username`, `email`, `password`, `token`, `rating`, `date_created`, `date_verification`, `online`) VALUES (:username_reg, :email, :password, :token, :rating, :date_create, :date_verification, True)");
        $upload_user->execute(array('username_reg' => $username_reg, 'email' => $email, 'password' => $psw, 'token' => $token, 'rating' => 1500, 'date_created' => $date, 'date_verification' => "-"));
        $vercode = "1234";
        $to = $email;
        $subject = "Mehen verification code";
        $message = 'To confirm your account, enter this code - '.$vercode.' - in the form on the site and click the CONFIRM button.';
        $headers = array('From' => 'mail@mehen.tk');
        mail($to, $subject, $message, $headers);
        $_SESSION['register_answer'] = 'The user `'.$username_reg.'` has been successfully added to the database. Account creation time - '.$date.'. Your ELO rating in the game - 1500. To verify your account, a verification code has been sent to your email address `'.$email.'`. Enter the received code in the form below and click the CONFIRM button. You can verify your account later. To do this, click &#127968; button.';
        setcookie("username", $username_reg, time()+3600, "/");
        setcookie("isset", "@", time()+3600, "/");
        setcookie("userrating", "1500", time()+3600, "/");
    } catch(PDOException $exception) {
        $_SESSION['register_answer'] = $exception;
        //echo $exception -> getMessage();
    };
};



include_once "../html/register.html";
?>
