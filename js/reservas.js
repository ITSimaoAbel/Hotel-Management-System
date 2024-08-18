// Abrir e fechar o modal de nova reserva
document.getElementById("nova-reserva-btn").addEventListener("click", function() {
    document.getElementById("modal-nova-reserva").style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("modal-nova-reserva").style.display = "none";
});

window.onclick = function(event) {
    if (event.target == document.getElementById("modal-nova-reserva")) {
        document.getElementById("modal-nova-reserva").style.display = "none";
    }
};

// Implementar a lógica para salvar a nova reserva ao enviar o formulário
document.getElementById("nova-reserva-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);

    fetch('php/add_reservation.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        alert(result);
        document.getElementById("modal-nova-reserva").style.display = "none";
        // Opcionalmente, você pode atualizar a tabela de reservas aqui
        // e.g., call a function to refresh the reservation list
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Houve um erro ao salvar a reserva.');
    });
});
