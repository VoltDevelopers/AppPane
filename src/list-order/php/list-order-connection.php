<?php

    require('../../common/php/connection.php');

    $connMySQL = new ConnectionMySQL();
    $pdo = $connMySQL->getConnection();

    $json = file_get_contents('php://input');
    $data = json_decode($json);

    $clientId = $data->clientId;

    $stmt = $pdo->prepare('SELECT * FROM tordinimaster, tcarrello, tordinidetail, tprodotti WHERE tordinidetail.idOrdine=tcarrello.id AND tcarrello.idCliente=:clientId AND tprodotti.id=tcarrello.idProdotto AND tordinimaster.idCliente=:clientId2');
    $stmt->execute(['clientId' => $clientId, 'clientId2' => $clientId]);
    $orderList = $stmt->fetchAll();

    $result = null;

    if($orderList != null){
        $result = array(
            'data' => json_encode($orderList),
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