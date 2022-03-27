<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

session_start();

if ($_COOKIE['uid']) {
    $email = unserialize($_COOKIE['uid'])['email'];
    $username = unserialize($_COOKIE['uid'])['username'];
    $verification_code = unserialize($_COOKIE['uid'])['verification_code'];

    $mail_ini_array = parse_ini_file('../mail.ini');

    $mail_host = $mail_ini_array["mail_host"];
    $mail_username = $mail_ini_array["mail_username"];
    $mail_password = $mail_ini_array["mail_password"];
    $mail_port = $mail_ini_array["mail_port"];

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host         = $mail_host;
    $mail->SMTPAuth     = true;
    $mail->Username     = $mail_username;
    $mail->Password     = $mail_password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // auth
    $mail->CharSet = 'UTF-8';
    $mail->From = $mail_username;
    $mail->addAddress($email);


    // content
    $mail->isHTML(true);
    $mail->Subject = 'Mehen verification code';
    $mail->Body    = 'Dear '.$username.', your verification code for MehenProject: '.$verification_code;


    try {
        $mail->send();
        include_once "verification.html";
    } catch (Exception $exception) {
        include_once "/error/error.php";
    };
} else {
    header('Location: sign.php');
};
?>
