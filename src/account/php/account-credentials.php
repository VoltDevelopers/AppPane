<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$email = $data->email;
$psw = $data->psw;
$pswHash = $data->pswHash;

$result = null;

try {
    $stmt = $pdo->prepare("UPDATE tclienti SET note=:note WHERE id=$user;");
    $stmt->execute(['note' => $all]);

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