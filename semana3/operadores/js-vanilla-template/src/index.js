// Aula 11 - Operadores -----------------

//Exercícios de interpretação de código
//1.

//a. false
//b. false
//c. true
//d. Boolean

//2.

//a. Undefined
//b. null
//c. 11
//d. 3
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//f. 9

//Exercícios de escrita de código

//1. (a) 
const age = prompt("Qual sua idade?")
//1.(b)
const ageBestFriend = prompt("Qual a idade do seu melhor amigo?")
//1. (c)
let answer = Number(age) > Number(ageBestFriend)
console.log("Sua idade é maior do que a do seu amigo?", answer)
//1. (d)
let difference = Number(age) - Number(ageBestFriend)
console.log("Diferença de Idade: ", difference)

//2.(a)
const number = prompt("Digite um número par")
//2.(b)
let mod = Number(number) % 2
console.log("Resto da adivião por 2: ", mod)
//2.(c) - o resto da divisão de um número par por outro numero par é zero
//2.(d) - Se o usuário digitar um número impar terá um resto na divisão

//3.(a)
let listaDeTarefas = [0]
//3.(b)
listaDeTarefas.push = prompt("Digite a sua Tarefa")
listaDeTarefas.push = prompt("Digite a sua Tarefa")
listaDeTarefas.push = prompt("Digite a sua Tarefa")
//3.(c)
console.log("Array da listaDeTarefas: ", listaDeTarefas)
//3.(d)
const indice = prompt("Digite um index da lista")
//3.(e)
listaDeTarefas.slice(Number(indice), 1)
//3.(d)
console.log("Novo array da listaDeTarefas: ", listaDeTarefas)

//4.
const nomeDoUsuario = prompt("Digite seu nome")
const emailDoUsuario = prompt("Digite seu email")
console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vindo(a), " + nomeDoUsuario + " !")