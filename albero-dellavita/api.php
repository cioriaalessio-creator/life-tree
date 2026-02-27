<?php
include 'db_config.php';
header('Content-Type: application/json');

$action = isset($_GET['action']) ? $_GET['action'] : '';
$oggi = date("Y-m-d");

if ($action == 'get') {
    $sql = "SELECT SUM(alberi_totali) AS totale FROM foresta";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $conteggio = $row['totale'] ?? 0;
    echo json_encode(["status" => "success", "count" => (int)$conteggio]);
} 

elseif ($action == 'save') {
    $sql = "INSERT INTO foresta (data_completamento, alberi_totali) 
            VALUES ('$oggi', 1) 
            ON DUPLICATE KEY UPDATE alberi_totali = alberi_totali + 1";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => $conn->error]);
    }
}
$conn->close();
?>