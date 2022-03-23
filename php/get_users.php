<?php
try {
    $all_users = $db_connect->prepare("SELECT `username` FROM `users`");
    $all_users->execute();
} catch(PDOException $exception) {
    $_SESSION['all_users'] = $exception;
    echo $exception -> getMessage();
};
?>
