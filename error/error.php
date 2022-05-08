<?php
session_start();

if (!$_SESSION['username'] && !$_SESSION['rating']) {
    $db_ini_array = parse_ini_file('../db.ini');
    require_once "../php/db_connect.php";

    require_once "../php/set_session.php";
};


include_once "error.html";

?>
