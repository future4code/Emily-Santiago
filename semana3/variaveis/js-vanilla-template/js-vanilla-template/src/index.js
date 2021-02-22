// Exercício de interpretação de código--------------
//1.1 console.log(b) - 10 Undefined
//1.2 console.log(a, b) - 10, 10 Undefined

//2.1 console.log(a, b, c) - 10, 10 10 Undefined

// Exercício de escrita de código--------------------
//(1)------------------------------------------------
let nome;
let idade;

console.log("Nome: ", typeof nome);
console.log("Idade: ", typeof idade);

//(d) o tipo empresso foi Undefined - pq não foi atribuido um tipo as variaveis declaradas

nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");

console.log("Nome: ", typeof nome);
console.log("Idade: ", typeof idade);
//(e) o console imprimiu duas strings.

console.log("Olá " + nome + ", você tem " + idade + " anos");

//(2)------------------------------------------------
let endereco = prompt("Qual o  seu endereço?");
let corFavorita = prompt("Qual sua cor favorita?");
let filme = prompt("Qual seu filme favorito?");
let carro = prompt("Você tem carro?");
let musicaFavorita = prompt("Qual sua musica favorita?");
console.log("Resposta: ", endereco);
console.log("Resposta: ", corFavorita);
console.log("Resposta: ", filme);
console.log("Resposta: ", carro);
console.log("Resposta: ", musicaFavorita);

//(3)------------------------------------------------
let array = ["sushi", "lasanha", "cuscuz", "arroz", "feijão"];
console.log("Array: ", array[0], array[1], array[2], array[3], array[4]);
console.log(array);

//(4)------------------------------------------------
let perguntas = ["Você está usando uma roupa azul hoje? ", "Você gosta de cuscuz? ", "Voce já foi á Las Vegas? "];
let respostas = ["sim", "sim", "sim"];
console.log(perguntas[0] + respostas[0]);
console.log(perguntas[1] + respostas[1]);
console.log(perguntas[2] + respostas[2]);



