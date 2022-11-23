// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

const soma = (num1, num2) => num1 + num2

console.log(soma(10, 5))
console.log(soma(50, 7))

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const eMaior = (num1, num2) => num1 >= num2

console.log(eMaior(5, 2))
console.log(eMaior(6, 10))

// c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

const imparPar = num => num % 2 === 0

const num = 7
console.log(`O numero ${num} é par? ${imparPar(num)}`)

// d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.  

const inss = salario => salario * 0.1

console.log(inss(5000))