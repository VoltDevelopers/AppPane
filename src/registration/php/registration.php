<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$email = $data->email;
$password = $data->password;

$result = null;

try {
    $stmt = $pdo->prepare("INSERT INTO tclienti (email, password, indirizzo, note) VALUES(:email, :password, 'unset for a moment', 'unset for a moment');");
    $stmt->execute(['email' => $email, 'password' => $password]);

    $result = array(
        'data' => null,
        'status' => 200,
    );
} catch (PDOException $e) {
    $result = array(
        'data' => $e,
        'status' => 504,
    );
}

echo json_encode($result);
?>