<?php
// Configurazione per Docker
// L'host non è più "localhost" ma il nome del servizio nel docker-compose
$host = "db"; 
$user = "root";
// La password deve coincidere con MYSQL_ROOT_PASSWORD nel docker-compose
$pass = "root_password"; 
$dbname = "albero_db";

// Creazione della connessione
$conn = new mysqli($host, $user, $pass, $dbname);

// Verifica della connessione
if ($conn->connect_error) {
    // Restituisce un errore JSON per essere compatibile con la tua api.php
    die(json_encode([
        "status" => "error", 
        "message" => "Connessione al database fallita: " . $conn->connect_error
    ]));
}

// Imposta il set di caratteri a utf8mb4 per supportare le emoji degli alberi nel DB
$conn->set_charset("utf8mb4");
?>