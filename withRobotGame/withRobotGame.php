<?php
session_start();

/*if (!$_SESSION['username'] && !$_SESSION['rating']) {
    $db_ini_array = parse_ini_file('../db.ini');
    require_once "../php/db_connect.php";
    require_once "../php/set_session.php";
};

if ($_COOKIE['token']) { include_once "signOut.html"; } else { include_once "signIn.html"; };*/

include_once "withRobotGame.html";


?>
