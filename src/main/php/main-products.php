<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$stmt = $pdo->query("SELECT * FROM tprodotti WHERE abilitato='s';");
$list = $stmt->fetchAll();
$result = null;

if ($list != null) {
    $result = array(
        'data' => json_encode($list),
        'status' => 200,
    );
} else {
    $result = array(
        'data' => null,
        'status' => 503,
    );
}

echo json_encode($result);
?>