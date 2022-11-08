<?php
require_once('connection.php');
require_once('token-manager.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$email = $data->email;
$password = $data->password;

$stmt = $pdo->prepare('SELECT * FROM tclienti WHERE email=:email AND password=:password');
$stmt->execute(['email' => $email, 'password' => $password]);
$user = $stmt->fetch();
$result = null;

if ($user != null) {
    $result = array(
        'data' => $user,
        'status' => 200,
    );

    TokenManager::authenticate($user['id']);
} else {
    $result = array(
        'data' => null,
        'status' => 503,
    );
}

echo json_encode($result);
?>