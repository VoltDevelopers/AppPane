<?php
require('connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$idClient = $data->idClient;
$idProduct = $data->idProduct;
$quantity = $data->quantity;
$token = $data->token;

$result = null;

try {
    $stmt = $pdo->prepare("SELECT * FROM tcarrello, tprodotti WHERE tcarrello.idCliente=:idC AND tcarrello.token=:tok AND tcarrello.idProdotto =:idProduct");
    $stmt->execute(['idC' => $idClient, 'tok' => $token, 'idProduct' => $idProduct]);
    $list = $stmt->fetchAll();

    // $isPrd = false;

    // foreach ($list as $record) {
    //     if ($record['quantity'] == 0) {
    //         $isPrd = true;
    //     }
    // }

    if ($list == null) {
        $stmt = $pdo->prepare("INSERT INTO tcarrello (idCliente, idProdotto, quantita, token) VALUES(:idClient, :idProduct, :quantity, :token);");
        $stmt->execute(['idClient' => $idClient, 'idProduct' => $idProduct, 'quantity' => $quantity, 'token' => $token]);

        $result = array(
            'data' => null,
            'status' => 200,
        );
    } else {
        $result = array(
            'data' => null,
            'status' => 504,
        );
    }
} catch (PDOException $e) {
    $result = array(
        'data' => $e,
        'status' => 504,
    );
}

echo json_encode($result);
?>