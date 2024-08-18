// scripts.js

// Abrir o modal ao clicar no botão "Novo Hóspede"
document.getElementById("novo-hospede-btn").addEventListener("click", function() {
    document.getElementById("modal-novo-hospede").style.display = "block";
});

// Fechar o modal ao clicar no botão de fechar (x)
document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("modal-novo-hospede").style.display = "none";
});

// Fechar o modal ao clicar fora da área do modal
window.onclick = function(event) {
    if (event.target == document.getElementById("modal-novo-hospede")) {
        document.getElementById("modal-novo-hospede").style.display = "none";
    }
};

// Lógica de submissão do formulário para adicionar um novo hóspede
document.getElementById("novo-hospede-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Hóspede salvo com sucesso!"); // Mensagem de sucesso (pode ser removida após integração)
    document.getElementById("modal-novo-hospede").style.display = "none";
    // Aqui, você pode adicionar a lógica para salvar o hóspede, possivelmente usando AJAX para enviar os dados ao back-end
});
