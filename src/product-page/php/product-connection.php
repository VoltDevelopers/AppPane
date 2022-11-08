<?php

require('../../common/php/connection.php');
$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$idProduct = $data->idProduct;

$stmt = $pdo->prepare('SELECT * FROM tprodotti WHERE id=:idProduct');
$stmt->execute(['idProduct' => $idProduct]);
$result = null;
$product = $stmt->fetch();

if($product != null) {
    
    $result = array(
        'data' => json_encode($product),
        'status' => 200,
    );
}else {

    $result = array(
        'data' => null,
        'status' => 417,
    );
}

echo json_encode($result);

?>