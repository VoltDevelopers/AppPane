<?php

require('../../common/php/connection.php');
$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$idProduct = $data->idProduct;

$stmt = $pdo->prepare('SELECT * FROM tprodotti WHERE id = $idProduct');
$stmt->execute(['nome' => $productName, 'descrizione' => $productDescription, 'prezzo' => $productPrice, 'foto' => $productImage]);
$result = null;
$product = $stmt->fetch();

if($product != null){

    $result = array(

        'productName' => $productName,
        'productDescription' => $productDescription,
        'prodouctPrice' => $productPrice,
        'productImage' => $productImage,

    );

}
echo json_encode($result);

?>