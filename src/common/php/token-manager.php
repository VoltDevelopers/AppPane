<?php
@session_start();
class TokenManager
{
    function __construct()
    {
        if (!TokenManager::isLogged()) {
            $_SESSION['user_id'] = @session_id();
            setcookie('user_id', @session_id(), time() + (86400 * 30), '/');
        }
    }
    static function logout()
    {
        TokenManager::unauthenticate();
        unset($_SESSION['user_id']);
        setcookie("user_id", "", time() - 3600, '/');
        header("Location: /");
        exit;
    }

    static function authenticate($user_id)
    {
        $_SESSION['user_auth'] = $user_id;
        setcookie('user_auth', $user_id, time() + (3600), '/');
    }

    static function unauthenticate()
    {
        unset($_SESSION['user_auth']);
        setcookie("user_auth", "", time() - 3600, '/');
    }

    static function isAuthenticated()
    {
        if (!isset($_SESSION['user_auth']) && isset($_COOKIE['user_auth'])) {
            $_SESSION['user_auth'] = $_COOKIE['user_auth'];
        }
        return isset($_SESSION['user_auth']);
    }
    static function isLogged()
    {
        if (!isset($_SESSION['user_id']) && isset($_COOKIE['user_id'])) {
            $_SESSION['user_id'] = $_COOKIE['user_id'];
        }
        return isset($_SESSION['user_id']);
    }
}
?>