<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$clientId = $data->clientId;
$productId = $data->productId;
$productQuantity = $data->productQuantity;
$result = null;

try{
    $stmt = $pdo->prepare("UPDATE tcarrello SET quantita=:newQuantity WHERE idCliente=:clientId AND idProdotto=:productId;");
    $stmt->execute(['newQuantity' => $productQuantity, 'clientId' => $clientId, 'productId' => $productId]);
    
    $result = array(
        'data' => $productQuantity,
        'status' => 200,
    );

}catch(PDOException $e){
    $result = array(
        'data' => $e,
        'status' => 417,
    );
}

echo json_encode($result);
