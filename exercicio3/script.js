// # Exercício 3

// a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

// b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

const soma = (num1, num2) => num1 + num2
const subtrai = (num1, num2) => num1 - num2
const divide = (num1, num2) => num1 / num2
const multiplica = (num1, num2) => num1 * num2

const num1 = Number(prompt("Digite um número")); num2 = Number(prompt("Digite outro número"))

const somatorio = soma(num1, num2)
const subtracao = subtrai(num1, num2)
const divisao = divide(num1, num2)
const multiplicacao = multiplica(num1, num2)

console.log(`
    Somatório: ${somatorio.toFixed(2)}
    Subtração: ${subtracao.toFixed(2)}
    Divisão: ${divisao.toFixed(2)}
    Multiplicação: ${multiplicacao.toFixed(2)}
`)