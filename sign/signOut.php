<?php
session_start();

if (isset($_COOKIE['token'])) {
    unset($_COOKIE['token']);
    setcookie('token', null, -1, '/');
    unset($_SESSION['username']);
    unset($_SESSION['rating']);
    unset($_SESSION['verification']);
    unset($_SESSION['date_created']);
};
header('Location: sign.php');

?>
