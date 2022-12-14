<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$email = $data->email;
$pswHash = $data->pswHash;
$userid = $data->userId;

$result = null;

try {
    $stmt = $pdo->prepare("UPDATE tclienti SET email=:email, password=:pswHash WHERE id=:userId;");
    $stmt->execute(['email' => $email, 'pswHash' => $pswHash, 'userId' => $userid]);

    

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