<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome_hospede = $_POST['nome-hospede'];
    $data_checkin = $_POST['data-checkin'];
    $data_checkout = $_POST['data-checkout'];
    $quarto = $_POST['quarto'];

    $sql_quarto = "SELECT id FROM quartos WHERE numero = ?";
    $stmt_quarto = $conn->prepare($sql_quarto);
    $stmt_quarto->bind_param("s", $quarto);
    $stmt_quarto->execute();
    $result_quarto = $stmt_quarto->get_result();
    $quarto_id = $result_quarto->fetch_assoc()['id'];
    $stmt_quarto->close();

    $sql_hospede = "INSERT INTO hospedes (nome) VALUES (?)";
    $stmt_hospede = $conn->prepare($sql_hospede);
    $stmt_hospede->bind_param("s", $nome_hospede);
    $stmt_hospede->execute();
    $hospede_id = $stmt_hospede->insert_id;
    $stmt_hospede->close();


    $sql_reserva = "INSERT INTO reserva (id_hospede, id_quarto, data_check_in, data_check_out) VALUES (?, ?, ?, ?)";
    $stmt_reserva = $conn->prepare($sql_reserva);
    $stmt_reserva->bind_param("iiss", $hospede_id, $quarto_id, $data_checkin, $data_checkout);

    if ($stmt_reserva->execute()) {
        echo "Reserva salva com sucesso!";
    } else {
        echo "Erro: " . $stmt_reserva->error;
    }

    $stmt_reserva->close();
    $conn->close();
}
?>
