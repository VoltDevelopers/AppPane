<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$userid = $data->userId;

$result = null;

$stmt = $pdo->prepare("SELECT password, email FROM tclienti where id=:userid;");
$stmt->execute(['userId' => $userid]);
$list = $stmt->fetch();


if ($list != null) {
    $result = array(
        'data' => json_encode($list),
        'status' => 200,
    );
} else {
    $result = array(
        'data' => null,
        'status' => 417,
    );
}

echo json_encode($result);
