<?php

    require('../../common/php/connection.php');

    $connMySQL = new ConnectionMySQL();
    $pdo = $connMySQL->getConnection();

    $json = file_get_contents('php://input');
    $data = json_decode($json);

    $clientId = $data->clientId;

    $stmt = $pdo->prepare('SELECT * FROM tordinimaster JOIN tordinidetail WHERE idCliente=:clientId');

    $result = null;
    $orderList = $stmt ->fetchAll();

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