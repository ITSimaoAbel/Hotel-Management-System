// scripts.js

// Funções para exibir relatórios simulados
function exibirRelatorioOcupacao() {
    const relatorioDisplay = document.getElementById("relatorio-display");
    relatorioDisplay.innerHTML = `
        <h2>Relatório de Ocupação</h2>
        <p>Ocupação média no último mês: 75%</p>
        <p>Quartos mais ocupados: Suite Deluxe, Quarto Standard</p>
        <!-- Mais detalhes aqui -->
    `;
    relatorioDisplay.style.display = "block";
}

function exibirRelatorioFaturamento() {
    const relatorioDisplay = document.getElementById("relatorio-display");
    relatorioDisplay.innerHTML = `
        <h2>Relatório de Faturamento</h2>
        <p>Faturamento total no último mês: R$ 50.000,00</p>
        <p>Quartos mais rentáveis: Suite Deluxe</p>
        <!-- Mais detalhes aqui -->
    `;
    relatorioDisplay.style.display = "block";
}

function exibirRelatorioHospedes() {
    const relatorioDisplay = document.getElementById("relatorio-display");
    relatorioDisplay.innerHTML = `
        <h2>Relatório de Hóspedes</h2>
        <p>Total de hóspedes no último mês: 120</p>
        <p>Principais países de origem: Brasil, EUA, Alemanha</p>
        <!-- Mais detalhes aqui -->
    `;
    relatorioDisplay.style.display = "block";
}

// Eventos para os botões de relatório
document.getElementById("relatorio-ocupacao-btn").addEventListener("click", exibirRelatorioOcupacao);
document.getElementById("relatorio-faturamento-btn").addEventListener("click", exibirRelatorioFaturamento);
document.getElementById("relatorio-hospedes-btn").addEventListener("click", exibirRelatorioHospedes);
