//Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de APROVADO para média superior 
//ou igual a 7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let n1 = parseFloat(prompt("Digite a primeira nota: "));
let n2 = parseFloat(prompt("Digite a segunda nota: "));
let n3 = parseFloat(prompt("Digite a terceira nota: "));
let n4 = parseFloat(prompt("Digite a quarta nota: "));

let media = (n1 + n2 + n3 + n4) / 4

console.log(media)

if (media >= 7) {
    console.log("APROVADO")
} else if (media >= 5 && media <7) {
    console.log("RECUPERAÇÃO")
} else {
    console.log("REPROVADO")
}