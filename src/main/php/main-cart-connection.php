<?php

require('../../common/php/connection.php');
$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$idClient = $data->idClient;
$idProduct = $data->idProduct;
$userToken = $data->token;

$stmt = $pdo->prepare("SELECT * FROM tcarrello WHERE idCliente=:idClient AND idProdotto=:idProduct AND token=:userToken");
$stmt->execute(['idClient' => $idClient, 'idProduct' => $idProduct, 'userToken' => $userToken]);
$result = null;
$productInCart = $stmt->fetchAll();

if($productInCart != null) {

    $result = array(
        'data' => 1,
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