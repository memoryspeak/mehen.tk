<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

session_start();

if ($_SESSION['verification'] == 0) {
    $db_ini_array = parse_ini_file('../db.ini');
    require_once "../php/db_connect.php";

    try {
        $upload_user_array = array('token' => $_COOKIE['token']);
        $upload_user = $db_connect->prepare("SELECT * FROM `users` WHERE `token` = :token");
        $upload_user->execute($upload_user_array);
        $verification_result = $upload_user->fetchAll();

        $email = $verification_result[0]['email'];
        $username = $verification_result[0]['username'];
        $verification_code = $verification_result[0]['verification_code'];
    } catch(PDOException $exception) {
            include_once "/error/error.php";
    };

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
        require_once "../php/set_session.php";

        include_once "verification.html";
    } catch (Exception $exception) {
        include_once "/error/error.php";
    };
} else {
    header('Location: sign.php');
};
?>
