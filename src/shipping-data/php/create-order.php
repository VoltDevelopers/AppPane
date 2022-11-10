<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$result = null;

$userid = $data->userId;
$userToken = $data->userToken;

$stmt = $pdo->prepare('SELECT tcarrello.id, tcarrello.idProdotto, tcarrello.quantita, tprodotti.prezzo FROM tcarrello, tprodotti WHERE tcarrello.idCliente=:userid AND tcarrello.token=:userToken AND tprodotti.id = tcarrello.idProdotto');
$stmt->execute(['userid' => $userid, 'userToken' => $userToken]);
$user = $stmt->fetchAll();



if ($user != null) {
    foreach ($user as $order) {
        $idProduct = $order['idProdotto'];
        $quantity = $order['quantita'];
        $idOrder = $order['id'];
        $price = $order['prezzo'] * $quantity;

        try {
            $stmt = $pdo->prepare("UPDATE tcarrello SET quantita=0 WHERE id=:idOrder");
            $stmt->execute(['idOrder' => $idOrder]);

            $stmt = $pdo->prepare("INSERT INTO tordinidetail (`idProdotto`, `quantita`, `idOrdine`, `prezzo`) VALUES (:idProduct, :quantity, :idOrder, :price)");
            $stmt->execute(['idProduct' => $idProduct, 'quantity' => $quantity, 'idOrder' => $idOrder, 'price' => $price]);

            $result = array(
                'data' => null,
                'status' => 200,
            );
        } catch (PDOException $e) {
            $result = array(
                'data' => $e,
                'status' => 504,
            );
        }
    }

    $stmt = $pdo->prepare("INSERT INTO tordinimaster (`idCliente`, `numero`, `datains`, `nota`) VALUES (:userid, 0, :todaysDay, 'check in account')");
    $stmt->execute(['userid' => $userid, 'todaysDay' => date('Y-m-d H:i:s')]);
} else {
    $result = array(
        'data' => null,
        'status' => 503,
    );
}

echo json_encode($result);