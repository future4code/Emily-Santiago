//Exercício 1

function inverteArray(array) {
   // implemente sua lógica aqui
   const reversed = array.reverse()
   return reversed
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   // implemente sua lógica aqui
   const result = array.filter(element => element % 2 === 0)
   const result2 = result.map(element => element * element)
   return result2
}

//Exercício 3

function retornaNumerosPares(array) {
   // implemente sua lógica aqui
   const result = array.filter(element => element % 2 === 0)
   return result
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let bigger = Math.max.apply(null, array)
   return bigger
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   // implemente sua lógica aqui
   const size = array.length
   return size
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   const respostas = []

   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2
   const booleano4 = !booleano3

   respostas[0] = Boolean(booleano1 && booleano2 && !booleano4)
   respostas[1] = Boolean((booleano1 && booleano2) || !booleano3)
   respostas[2] = Boolean((booleano2 || booleano3) && (booleano4 || booleano1))
   respostas[3] = Boolean(!(booleano2 && booleano3) || !(booleano1 && booleano3))
   respostas[4] = Boolean(!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))

   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   const array = []

   for (let i = 0; array.length < n; i += 2) {
      array.push(i)
   }
   // console.log(array)
   return array
}


// Exercício 8

function checaTriangulo(a, b, c) {
   // implemente sua lógica aqui
   let triangle = ''
   if (a === b && a === c) {
      triangle = 'Equilátero'
   } else if (a === b || a === c || b === c) {
      triangle = 'Isósceles'
   } else {
      triangle = 'Escaleno'
   }

   return triangle
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let bigger = 0
   let divisible
   let difference = Math.abs(num1 - num2)

   if (num1 > num2) {
      bigger = num1
   } else {
      bigger = num2
   }

   if (num1 % num2 === 0 || num2 % num1 === 0) {
      divisible = true
   } else {
      divisible = false
   }

   const objNumber = {
      maiorNumero: bigger,
      maiorDivisivelporMenor: divisible,
      diferenca: difference
   }

   return objNumber
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui

   let result = []
   // buscando o valor máximo no array
   let max = Math.max(...array)
   // criando um array novo sem o valor máximo
   const arrayMax = array.filter(element => element !== max)
   // procurando agora o valor máximo no novo array
   let max2 = Math.max(...arrayMax)
   result[0] = max2

   let min = Math.min(...array)
   // criando um array novo sem o valor máximo
   const arrayMin = array.filter(element => element !== min)
   // procurando agora o valor máximo no novo array
   let min2 = Math.min(...arrayMin)
   result[1] = min2

   return result
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   function compararNumeros(a, b) {
      return a - b
   }
   //console.log('Ordenada com compararNumeros:', array.sort(compararNumeros));
   return array.sort(compararNumeros)
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const ObjFilme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }

   return ObjFilme
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   let objeto = filmeFavorito()
   let stringAtores = (objeto.atores).join(', ')
   return `Venha assistir ao filme ${objeto.nome}, de ${objeto.ano}, dirigido por ${objeto.diretor} e estrelado por ${stringAtores}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   const ObjRetangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }
   return ObjRetangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui

   return {
      ...pessoa,
      nome: 'ANÔNIMO'
   }
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]


// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   const novoArray = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade >= 18
   })
   return novoArray
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   const novoArray = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade < 18
   })
   return novoArray
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui

   return array.map(el => el * 2)
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
   const newArray = array.map(el => el * 2)
   return (newArray.toString().split(','))
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   const newArray = array.map((num) => {
      if (num % 2 === 0) {
         return `${num} é par`
      } else {
         return `${num} é ímpar`
      }
   })

   return newArray
}


// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
   let result = []
   for (const el of pessoas) {
      if (el.altura >= 1.5 && el.idade > 14 && el.idade < 60) {
         result.push(el)
      }
   }
   return result
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   let result = []
   for (const el of pessoas) {
      if (el.altura < 1.5 || el.idade < 14 || el.idade > 60) {
         result.push(el)
      }
   }
   return result

}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta() {
   // implemente sua lógica aqui
   return consultas.map((consulta) => {
      let email = "Olá, "

      if (!consulta.cancelada) {
         if (consulta.genero === "feminino") {
            email += "Sra. "
         } else {
            email += "Sr. "
         }

         email += consulta.nome + ". "
         email += "Estamos enviando esta mensagem para "

         if (consulta.genero === "feminino") {
            email += "lembrá-la "
         } else {
            email += "lembrá-lo "
         }

         email += "da sua consulta no dia " + consulta.dataDaConsulta + ". "
         email += "Por favor, acuse o recebimento deste-email."
      } else {
         if (consulta.genero === "feminino") {
            email += "Sra. "
         } else {
            email += "Sr. "
         }

         email += consulta.nome + ". "
         email += "Infelizmente sua consulta marcada para o dia "
         email += consulta.dataDaConsulta + " foi cancelada. "
         email += "Se quiser, pode entrar em contato conosco para remarcá-la."
      }

      return email
   });
}


//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   // implemente sua lógica aqui
   contas.forEach((conta) => {

      let total = 0
      conta.compras.forEach((valor) => {
         total += valor
      })
      conta.saldoTotal -= total
   })
   return contas
}
