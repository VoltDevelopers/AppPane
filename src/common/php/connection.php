<?php
class ConnectionMySQL
{
     private const host = '127.0.0.1';
     private const db = 'test';
     private const user = 'root';
     private const pass = '';
     private const charset = 'utf8mb4';
     private const dsn = "mysql:host=" . $this->host . ";dbname=" . $this->db . ";charset=" . $this->charset;
     private const options = [
          PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
          PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
          PDO::ATTR_EMULATE_PREPARES => false,
          PDO::ATTR_PERSISTENT => true,
     ];
     private $connection = null;

     function __construct(){
          try {
               $this->connection = new PDO(ConnectionMySQL::dsn, ConnectionMySQL::user, ConnectionMySQL::pass, ConnectionMySQL::options);
          } catch (\PDOException $e) {
               throw new \PDOException($e->getMessage(), (int) $e->getCode());
          }
     }

     function getConnection() {
          if ($this->connection) {
               return $this->connection;
          }
     }
}
?>