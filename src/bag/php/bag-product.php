<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$idClient = $data->idClient;
$token = $data->token;

$result = null;

$stmt = $pdo->prepare("SELECT * FROM tcarrello, tprodotti WHERE tcarrello.idCliente=:idC AND tcarrello.token=:tok AND tcarrello.idProdotto = tprodotti.id");
$stmt->execute(['idC' => $idClient, 'tok' => $token]); 
$list = $stmt->fetchAll();

if ($list != null) {
    $result = array(
        'data' => json_encode($list),
        'status' => 200,
    );
} else {
    $result = array(
        'data' => $list,
        'status' => 417,
    );
}

echo json_encode($result);
?>