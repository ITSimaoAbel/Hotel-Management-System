// Abrir o modal ao clicar no botão "Novo Quarto"
document.getElementById("novo-quarto-btn").addEventListener("click", function() {
    document.getElementById("modal-novo-quarto").style.display = "block";
});

// Fechar o modal ao clicar no botão de fechar (x)
document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("modal-novo-quarto").style.display = "none";
});

// Fechar o modal ao clicar fora da área do modal
window.onclick = function(event) {
    if (event.target == document.getElementById("modal-novo-quarto")) {
        document.getElementById("modal-novo-quarto").style.display = "none";
    }
};

// Lógica de submissão do formulário para adicionar um novo quarto
document.getElementById("novo-quarto-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('php/add_quarto.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        alert(result);
        document.getElementById("modal-novo-quarto").style.display = "none";
        // Opcionalmente, você pode atualizar a tabela de quartos aqui
        // e.g., call a function to refresh the room list
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Houve um erro ao salvar o quarto.');
    });
});
