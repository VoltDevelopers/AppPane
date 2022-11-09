<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$clientId = $data->clientId;
$productId = $data->productId;
$result = null;

try{

    $stmt = $pdo->prepare("DELETE FROM tcarrello WHERE idCliente=:clientId AND idProdotto=:productId");
    $stmt->execute(['clientId' => $clientId, 'productId' => $productId]);

    $result = array(
        'data' => "rimosso",
        'status' => 200,
    );

}catch(PDOException $e){
    $result = array(
        'data' => $e,
        'status' => 417,
    );

}

echo json_encode($result);

?>