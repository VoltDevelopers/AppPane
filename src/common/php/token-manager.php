<?php
class TokenManager
{
    function __construct()
    {
        @session_start();

        if (!TokenManager::isLogged()) {
            $_SESSION['user_id'] = @session_id();
            setcookie('user_id', @session_id(), (time() + (60*60*24*10)), '/');
        }
    }
    static function logout()
    {
        TokenManager::unauthenticate();
        unset($_SESSION['user_id']);
        setcookie("user_id", "", time() - (60*60*24), '/');
        header("Location: ../../../index.php");
        exit;
    }

    static function authenticate($user_id)
    {
        setcookie('user_auth', $user_id, time() + (60*10), '/');
    }

    static function unauthenticate()
    {
        setcookie("user_auth", "", time() - (60*10), '/');
    }

    static function isAuthenticated()
    {
        return isset($_COOKIE['user_auth']);
    }
    static function isLogged()
    {
        return isset($_COOKIE['user_id']);
    }
}
?>