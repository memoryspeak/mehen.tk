<?php
session_start();

require_once "../php/db_connect.php";
//require_once "../php/get_users.php";

$inputUsername = $_POST["inputUsername"];
$inputPassword = md5($_POST["inputPassword"]);
$inputEmail = $_POST["inputEmail"];

if ($inputUsername && $inputPassword && $inputEmail) {
    try {
        $time = time();
        $microtime = microtime();
        $date = date('Y-m-d H:i:s', $time);
        $token = md5($time.$username_reg.$email.$microtime);
        $upload_user = $db_connect->prepare("INSERT INTO `users` (`username`, `email`, `password`, `token`, `rating`, `date_created`, `verification`, `online`, `latest_date_online`) VALUES (:username, :email, :password, :token, :rating, :date_created, :verification, :online, :latest_date_online)");
        $upload_user->execute(array('username' => $inputUsername, 'email' => $inputEmail, 'password' => $inputPassword, 'token' => $token, 'rating' => 1500, 'date_created' => $date, 'verification' => 0, 'online' => 1, 'latest_date_online' => $date));
        //$vercode = "1234";
        //$to = $email;
        //$subject = "Mehen verification code";
        //$message = 'To confirm your account, enter this code - '.$vercode.' - in the form on the site and click the CONFIRM button.';
        //$headers = array('From' => 'mail@mehen.tk');
        //mail($to, $subject, $message, $headers);
        //$_SESSION['register_answer'] = 'The user `'.$username_reg.'` has been successfully added to the database. Account creation time - '.$date.'. Your ELO rating in the game - 1500. To verify your account, a verification code has been sent to your email address `'.$email.'`. Enter the received code in the form below and click the CONFIRM button. You can verify your account later. To do this, click &#127968; button.';
        setcookie("uid", $token, time()+3600, "/");
        //setcookie("isset", "@", time()+3600, "/");
        //setcookie("userrating", "1500", time()+3600, "/");
        header('Location: verification.php');
    } catch(PDOException $exception) {
        //$_SESSION['register_answer'] = $exception;
        //echo $exception -> getMessage();
print_r($exception);
        $showUsernameHelp = 'true';
        $showEmailHelp = 'true';
        //include_once "registration.html";
    };
} else {
    $showUsernameHelp = 'false';
    $showEmailHelp = 'false';
    include_once "registration.html";
};

/*try {
    $all_users = $db_connect->prepare("SELECT `username` FROM `users`");
    $all_users->execute();
    $all_users_list = $all_users->fetchAll(PDO::FETCH_ASSOC);
    $_SESSION['all_users'] = $all_users_list;
    include_once "registration.html";
} catch(PDOException $exception) {
    //$_SESSION['all_users'] = $exception;
    //echo $exception -> getMessage();
    include_once "/error/error.php";
};*/
?>
