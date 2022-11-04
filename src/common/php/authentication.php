<?php
require('connection.php');
$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$stmt = $pdo->query('SELECT * FROM tclienti');
while ($row = $stmt->fetch()) {
    echo var_dump($row);
}
?>