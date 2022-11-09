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

$credential = ($name . $surname);
$streetData = ($tel . $street . $zip . $city);

$result = null;

try {
    $stmt = $pdo->prepare("UPDATE tclienti SET indirizzo=:indirizzo, note=:nota WHERE id=:userId;");
    $stmt->execute(['indirizzo' => $streetData, 'nota' => $credential, 'userId' => $userid]);

    

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