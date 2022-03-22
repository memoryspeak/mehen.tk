<?php
session_start();

if ($_COOKIE['uid'] == '') { include_once "signIn.html"; } else { include_once "signOut.html"; };

?>
