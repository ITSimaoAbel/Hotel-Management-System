// scripts.js

// Funções para exibir diferentes configurações simuladas
function exibirConfigPerfil() {
    const configDisplay = document.getElementById("config-display");
    configDisplay.innerHTML = `
        <h2>Gerenciar Perfil de Usuário</h2>
        <p>Aqui você pode atualizar suas informações pessoais, alterar senha e definir preferências de conta.</p>
        <!-- Formulário ou opções para gerenciar perfil -->
    `;
    configDisplay.style.display = "block";
}

function exibirConfigPermissoes() {
    const configDisplay = document.getElementById("config-display");
    configDisplay.innerHTML = `
        <h2>Gerenciar Permissões</h2>
        <p>Defina quais ações cada usuário ou grupo de usuários pode realizar no sistema.</p>
        <!-- Opções para gerenciar permissões -->
    `;
    configDisplay.style.display = "block";
}

function exibirConfigSistema() {
    const configDisplay = document.getElementById("config-display");
    configDisplay.innerHTML = `
        <h2>Preferências do Sistema</h2>
        <p>Altere as configurações gerais do sistema, como idioma, tema e opções de notificação.</p>
        <!-- Opções para gerenciar preferências do sistema -->
    `;
    configDisplay.style.display = "block";
}

// Eventos para os botões de configuração
document.getElementById("config-perfil-btn").addEventListener("click", exibirConfigPerfil);
document.getElementById("config-permissoes-btn").addEventListener("click", exibirConfigPermissoes);
document.getElementById("config-sistema-btn").addEventListener("click", exibirConfigSistema);
