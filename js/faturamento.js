// scripts.js

// Abrir o modal ao clicar no botão "Nova Fatura"
document.getElementById("nova-fatura-btn").addEventListener("click", function() {
    document.getElementById("modal-nova-fatura").style.display = "block";
});

// Fechar o modal ao clicar no botão de fechar (x)
document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("modal-nova-fatura").style.display = "none";
});

// Fechar o modal ao clicar fora da área do modal
window.onclick = function(event) {
    if (event.target == document.getElementById("modal-nova-fatura")) {
        document.getElementById("modal-nova-fatura").style.display = "none";
    }
};

// Lógica de submissão do formulário para adicionar uma nova fatura
document.getElementById("nova-fatura-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Fatura salva com sucesso!"); // Mensagem de sucesso (pode ser removida após integração)
    document.getElementById("modal-nova-fatura").style.display = "none";
    // Aqui, você pode adicionar a lógica para salvar a fatura, possivelmente usando AJAX para enviar os dados ao back-end
});
