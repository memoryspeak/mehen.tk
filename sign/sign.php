<?php
session_start();

if ($_COOKIE['uid'] == '') { include_once "signIn.html"; echo '123';} else { include_once "signOut.html"; };

?>
