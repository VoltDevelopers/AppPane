<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$email = $data->email;
$password = $data->password;

$result = null;

try {
    $stmt = $pdo->prepare("INSERT INTO tclienti (email, password, indirizzo, note) VALUES(:email, :password, 'unset for a moment', 'unset for a moment');");
    $stmt->execute(['email' => $email, 'password' => $password]);

    $result = array(
        'data' => null,
        'status' => 200,
    );

    $url = '../../common/php/authentication.php';
    $data = array('email' => $email, 'password' => $password);
    $options = array(
        'http' => array(
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        )
    );

    $context = stream_context_create($options);
    $resp = file_get_contents($url, false, $context);
    
    if ($resp === FALSE) {
        $result = array(
            'data' => null,
            'status' => 504,
        );
    }
} catch (PDOException $e) {
    $result = array(
        'data' => $e,
        'status' => 503,
    );
}

echo json_encode($result);
?>