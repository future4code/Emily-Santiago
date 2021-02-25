// **AULA 13 - LAÇOS**

// **Exercícios de interpretação de código**--------------------------------------------------------------------------------

//1. A variável valor inicia com 0. Quando entra no for 'valor' começa a somar os números de 1 até 4 (menor que 5). 
// valor = 1+2+3+4 =10. Como o console.log está fora do loop, ele so imprime o valor final de 10.

//2. No for ..of a condição para imprimir é ser maior que 18. Todos os números maiores que 18 serão impressos no console.
// Logo, o programa vai imprimir: 18 19 21 23 25 27 30. 

// **Exercícios de escrita de código**---------------------------------------------------------------------------------------
//Exercício 3

//(a)
const vetoresA = [80, 30, 70, 10, 30, 90, 50];
for (let vet of vetores) {
    console.log(vet)
}
//(b)
const vetoresB = [80, 30, 70, 10, 30, 90, 50];
for (let div of vetores) {
    div /= 10
    console.log(div)
}
//(c)
let array = [3, 2, 5, 10, 20, 30]
let i = 0
let newArray = []

while (i < array.length) {
    if (array[i] % 2 === 0) {
        newArray[i] = array[i]
    }
    i++
}
console.log("newArray")

//(d)
const arrayD = [80, 30, 70, 10, 30, 90, 50];

for (let i = 0; i < arrayD.length; i++) {
    console.log("O elemento do index " + (i + 1) + " é " + arrayD[i])
}
//(e)
const arrayE = [34, 11, 15, 13, 18, 21]
let maiorNumero = 0
let menorNumero = arrayE[0];

for (let numero of arrayNumeros) {
    if (numero > maiorNumero) {
        maiorNumero = numero
    } else if (numero > maiorNumero) {
        maiorNumero = numero
    }
}

console.log("Maior número é " + maiorNumero + "e o menor número é " + menorNumero)
