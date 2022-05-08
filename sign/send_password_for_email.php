<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

session_start();

$db_ini_array = parse_ini_file('../db.ini');
require_once "../php/db_connect.php";

$inputUsername = $_POST['inputUsername'];
$inputEmail = $_POST['inputEmail'];

if ($inputUsername && $inputEmail) {
    try {
        $upload_user_array = array('username' => $inputUsername, 'email' => $inputEmail);
        $upload_user = $db_connect->prepare("SELECT * FROM `users` WHERE `username` = :username AND `email` = :email");
        $upload_user->execute($upload_user_array);
        $verification_result = $upload_user->fetchAll();

        if ($verification_result[0]) {
            $gen_password = '';
	    $lowercase_arr = array(
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
		'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
	    );
            $uppercase_arr = array(
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
		'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	    );
            $digital_arr = array(
		'1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
	    );

            for ($i = 0; $i < 5; $i++) {
                $gen_password .= $lowercase_arr[random_int(0, count($lowercase_arr) - 1)];
                $gen_password .= $uppercase_arr[random_int(0, count($uppercase_arr) - 1)];
                $gen_password .= $digital_arr[random_int(0, count($digital_arr) - 1)];
            };
            $new_password = str_shuffle($gen_password);

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
            $mail->addAddress($inputEmail);

            // content
            $mail->isHTML(true);
            $mail->Subject = 'Mehen password';
            $mail->Body    = 'Dear '.$verification_result[0]['username'].', your password for MehenProject: '.$new_password;

            try {
                $mail->send();
                try {
                    $update_user = $db_connect->prepare("UPDATE `users` SET `password` = :password WHERE `username` = :username AND `email` = :email");
                    $update_user->execute(array('password' => md5($new_password), 'username' => $verification_result[0]['username'], 'email' => $verification_result[0]['email']));
                    header('Location: sign.php');
                } catch(PDOException $exception) {
                    include_once "/error/error.php";
                };
            } catch (Exception $exception) {
                include_once "/error/error.php";
            };
        } else {
            header('Location: fogotPassword.php');
        };
    } catch(PDOException $exception) {
        include_once "/error/error.php";
    };
} else {
    header('Location: sign.php');
};
?>
