
// Validação do formulário de perfil
document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    
    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    // Lógica para enviar os dados ao back-end (PHP e MySQL)
    alert("Perfil atualizado com sucesso!");
});
