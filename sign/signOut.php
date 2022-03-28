<?php
session_start();

if (isset($_COOKIE['uid'])) {
    unset($_COOKIE['uid']);
    setcookie('uid', null, -1, '/');
};
header('Location: sign.php');

?>
