opcao = 1

function contagem10() {
    for (let numeros = 1; numeros <= 10; numeros++) {
        console.log(numeros)
    }
}

function tabuada() {
    let numero = parseInt(prompt("Digite um número: "));
    let tabuada = 0;

    for (i = 1; i <= 10; i++) {
        tabuada = numero * i;

        console.log(tabuada)
    }
}

function imparPar() {
    let numero = parseInt(prompt("Digite um número: "))

    if (numero % 2 == 0) {
        console.log("Esse número é par")
    } else {
        console.log("Esse número é ímpar")
    }
}

function contagemRegressiva() {
    let numero = parseInt(prompt("Digite um número: "));

    console.log("Contagem regressiva está começando em: " + numero)

    while (numero >= 0) {
        console.log(numero);
        numero--
    }
}

function maiorIdade() {
    let anoNascimento = parseInt(prompt("Informe o ano de nascimento: "))
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;

    if (idade >= 18) {
        console.log("Você é maior de idade")
        console.log("Sua idade é: " + idade)
    }
    else {
        console.log("Você é menor de idade")
        console.log("Sua idade é: " + idade)
    }
}

function imc() {
    let peso = parseFloat(prompt("Informe o seu peso (em kg): "))
    let altura = parseFloat(prompt("Informe a sua altura (em metros): "))
    let imc = peso / (altura * altura)

    console.log("Seu IMC é: " + imc.toFixed(2))

    if (imc < 18.5) {
        console.log("Abaixo do peso")
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal")
    }
    else if (imc >= 25.0 && imc <= 29.9) {
        console.log("Sobrepeso")
    }
    else if (imc >= 30.0 && imc <= 34.9) {
        console.log("Obesidade grau 1")
    }
    else if (imc >= 35.0 && imc <= 39.9) {
        console.log("Obesidade grau 2")
    }
    else (imc >= 40.0); {
        console.log("Obesidade grau 3")
    }
}

while (opcao != "0") {
    opcao = prompt("Escolha uma das opções a seguir para exibir sua respectiva função, ou digite '0' para sair: \n 1. Contagem até 10 \n 2. Tabuada \n 3. Número ímpar ou par \n 4. Contagem regressiva \n 5. Verificar se é maior de idade \n 6. Calcular IMC")

    switch (opcao) {
        case "1":
            contagem10();
            break;

        case "2":
            tabuada();
            break;

        case "3":
            imparPar();
            break;

        case "4":
            contagemRegressiva();
            break;

        case "5":
            maiorIdade();
            break;

        case "6":
            imc();
            break;
    }
}


