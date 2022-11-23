const eMaior = (name, birthYear, currentYear, idade = currentYear-birthYear) => {
    return `${name} é maior de idade? ${(idade)>=18}, ele tem ${idade} anos`
}

console.log(eMaior("Fulano", 2010, 2022))
console.log(eMaior("Ciclano", 2000, 2022))

