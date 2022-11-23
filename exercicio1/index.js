//# Exercício 1

//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// const printer = (nome) =>{
//     console.log(nome)
// }

// printer("Fulaninho")

//b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.

const tabuada = num =>{
    console.log(`Tabuada do número ${num}:`)
    for (let i = 0; i <=10; i++){
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

tabuada(5)
tabuada(8)

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
