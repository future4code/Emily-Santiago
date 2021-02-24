
// Aula de Expressões Condicionais em JavaScript

// **Exercícios de interpretação de código**

//1 . O Código recebe uma String digitada pelo usuário, 
//transforma para uma constante do tipo número
//Depois a condicionais testa se o valor é par 
// e se for, imprime "passou no teste", caso contrário,  
//imprime "Não passou no teste"


//2(a) O código serve para identificar que tipo de fruta o usuário escolheu
//2.(b)O preço da fruta maçã é R$ 2.25
//2.(c)O preço da fruta pera é R$ 5.5 preço da fruta pera é R$ 5 

//3(a) Está pegando uma constante do tipo String, digitada pelo usuário, e transformando em número
//3(b) Se o numero=10 o código irá imprimir: Esse número passou no teste Essa mensagem é secreta!!!
//Se o usuário digitar -10 nada será impresso no console
//3(c) Haverá erro pq a váriável mensagem so existe dentro do bloco do if {}

// **Exercícios de escrita de código**

//4.1 e 4.2
const age = Number(prompt("Digite sua idade"))
//4.3
if (age > 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

//5
const turno = prompt("Digite seu Turno (M/V/N)")
turno = turno.toUpperCase

if (turno === "M") {
    console.log("Bom dia")
} else if (turno === "V") {
    console.log("Boa Tarde")
} else if (turno === "N") {
    console.log("Boa Noite")
} else {
    console.log("Valor inválido")
}

//6
const turno = prompt("Digite seu Turno (M/V/N)")
turno = turno.toUpperCase

switch (turno) {
    case "M":
        console.log("Bom dia")
        break
    case "V":
        console.log("Boa Tarde")
        break
    case "N":
        console.log("Boa Noite")
        break
    default:
        console.log("Valor inválido")
}

//7
const generoFilme = prompt("Qual o gênero do filme")

const precoFilme = Number(prompt("Qual o preço do filme"))

if (generoFilme.toLowerCase === "fantasia" && precoFilme < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro file:(")
}