<?php

require('../../common/php/connection.php');
$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

print_r($pdo);

/*

$json = file_get_contents('php://input');
$data = json_decode($json);

$idProduct = $data->idProduct;

$stmt = $pdo->prepare('SELECT * FROM tprodotti WHERE id = $idProduct');
$stmt->execute(['nome' => $productName, 'descrizione' => $productDescription, 'prezzo' => $productPrice, 'foto' => $productImage]);
echo json_encode($productName);
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
*/

$result = array(

    'productName' => "ciaso",

);

echo json_encode($result);

?>