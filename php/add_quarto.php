<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $numero_quarto = $_POST['numero-quarto'];
    $tipo_quarto = $_POST['tipo-quarto'];
    $status_quarto = $_POST['status-quarto'];
    $preco_quarto = $_POST['preco-quarto'];

    $sql = "INSERT INTO quartos (numero, tipo, status, preco) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssd", $numero_quarto, $tipo_quarto, $status_quarto, $preco_quarto);

    if ($stmt->execute()) {
        echo "Quarto salvo com sucesso!";
    } else {
        echo "Erro: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
