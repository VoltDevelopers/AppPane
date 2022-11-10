<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$name = $data->name;
$surname = $data->surname;
$tel = $data->tel;
$street = $data->street;
$zip = $data->zip;
$city = $data->city;
$userid = $data->userId;

$credentialData = ($name . $surname);
$shippingData = ($tel . $street . $zip . $city);

$result = null;

try {
    $stmt = $pdo->prepare("UPDATE tclienti SET indirizzo=:shippingData, note=:credentialData WHERE id=:userId;");
    $stmt->execute(['shippingData' => $shippingData, 'credentialData' => $credentialData, 'userId' => $userid]);

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