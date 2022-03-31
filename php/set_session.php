<?php

try {
    $upload_user_array = array('token' => $_COOKIE['token']);
    $upload_user = $db_connect->prepare("SELECT * FROM `users` WHERE `token` = :token");
    $upload_user->execute($upload_user_array);
    $verification_result = $upload_user->fetchAll();

    if ($verification_result[0]['token'] == $_COOKIE['token']) {
        $_SESSION['username'] = $verification_result[0]['username'];
        $_SESSION['rating'] = $verification_result[0]['rating'];
        $_SESSION['verification'] = $verification_result[0]['verification'];
        $_SESSION['date_created'] = $verification_result[0]['date_created'];
    } else {
        unset($_SESSION['username']);
        unset($_SESSION['rating']);
        unset($_SESSION['verification']);
        unset($_SESSION['date_created']);
    };
} catch(PDOException $exception) {
    include_once "/error/error.php";
};
?>
