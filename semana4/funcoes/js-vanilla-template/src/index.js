// AULA 14 - FUNÇÕES

// **Exercícios de interpretação de código*--------------------------------------------------------------------------------------------------------

// EXERCÍCIO 1
//(a) Sera impresso o valor de 2*5 (10) e 10*5 (50)
//(b) Não apareceria nada no console.

//EXERCÍCIO 2
//(a) Serão impressos apenas os dois primeiros nomes da matriz "arrayDeNames". No caso, "Darvas" e "Caio"
//(b) Serão impressos apenas os dois primeiros nomes da matriz que nesse caso seria "Amanda" e "Caio"

//EXERCÍCIO 3
// Essa Arrow function chamada metodo, recebe um array na entrada. Ela recebe o array, seleciona os números pares e eleva esses valores ao quadrado.
// A saída da Arrow function é outra matriz com esses valores pares elevados ao quadrado. 
// O nome da funcao metodo poderia ser: "NumerosParesAoQuadrado"
//O "x" poderia ser: "item"
// A "arrayFinal" poderia ser: "arrayResultados"

// **Exercícios de escrita de código**---------------------------------------------------------------------------------------------------------------

//EXERCÍCIO 4
//(a)
function questao4a() {
    let nome = "Emilly"
    let idade = 32
    let cidade = "Recife"
    let estuda = true

    if (estuda = true) {
        console.log(nome + " , tenho " + idade + " anos, moro em " + cidade + " e sou estudante.")
    } else {
        console.log(nome + " , tenho " + idade + " anos, moro em " + cidade + " e não sou estudante.")
    }
}
questao4a()

//(b)
function questao4b(nome, idade, cidade, estuda) {
    if (estuda = true) {
        console.log(nome + " , tenho " + idade + " anos, moro em " + cidade + " e sou estudante.")
    } else {
        console.log(nome + " , tenho " + idade + " anos, moro em " + cidade + " e não sou estudante.")
    }
}
questao4b("Lais", "23", "São Paulo", true)

// EXERCÍCIO 5
//(a)
function somaNumeros(num1, num2) {
    return soma = num1 + num2
}
console.log(somaNumeros(1, 2))

//(b)
function maiorQ(num1, num2) {
    if (num1 >= num2) {
        return true
    } else {
        return false
    }
}
console.log(maiorQ(2, 2))
//(c)
function imprime10(mensagem) {
    for (let i = 1; i <= 10; i++) {
        console.log(mensagem)
    }
}
imprime10("Eu adoro programar!!")

//EXERCÍCIO 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//(a)
let ArrowFuncao = (array) => {
    return array.length
}

//(b)
function numeroPar(numero) {
    if (numero % 2 == 00) {
        return true
    } else {
        return false
    }
}

//(c)
function quantDePar(array) {
    let contador = 0
    for (index of array) {
        if (index % 2 === 0) {
            contador = +1
        }
    }
    return contador
}
//(d)
function quantDePar(array) {
    let contador = 0
    for (index of array) {
        if (numeroPar(index) === true) {
            contador = +1
        }
    }
    return contador
}