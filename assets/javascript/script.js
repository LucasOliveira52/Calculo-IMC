const formulario = document.getElementById("formulario-imc");
const peso = document.getElementById("input-peso");
const altura = document.getElementById("input-altura");
const resultadoDoImc = document.getElementById("resultado-imc");
const classificacaoImc = document.getElementById("classificacao-imc");
const resultadoContainer = document.getElementById("resultado-container");


formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let imc = calcularImc();
    if (imc) {
    let classificacao = classificarImc(imc);
    resultadoDoImc.textContent = imc;
    classificacaoImc.textContent = classificacao;
    resultadoContainer.classList.remove("escondido");
    }
});

function calcularImc() {
    const pesoNumero = Number(peso.value);
    const alturaNumero = Number(altura.value);
    const pesoNaoEhNumero = isNaN(pesoNumero);
    const alturaNaoEhNumero = isNaN(alturaNumero);
    
    if (pesoNaoEhNumero === true || alturaNaoEhNumero === true) {
        alert("Por favor, insira valores válidos para altura e peso.");
    return;
    }
        const alturaEmMetro = alturaNumero / 100;
        const resultadoImc = pesoNumero / (alturaEmMetro * alturaEmMetro);
        return Number(resultadoImc.toFixed(2));
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return "Magreza";
    }
    else if (imc < 25) {
        return "Normal";
    }
    else if (imc < 30) {
        return "Sobrepeso";
    }
    else if (imc < 35) {
        return "Obesidade grau I";
    }
    else if (imc < 40) {
        return "Obesidade grau II";
    }
        return "Obesidade grau III";
}