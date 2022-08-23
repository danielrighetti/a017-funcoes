// parte a

let soma = (n1, n2) => {
    return n1 + n2
}

let subtracao = (n1, n2) => {
    return n1 - n2
}

let multiplicacao = (n1, n2) => {
    return n1 * n2
}

let divisao = (n1, n2) => {
    return n1 / n2
}

let num1 = +prompt("Digite um número: ")
let num2 = +prompt("Digite mais um número: ")

console.log(soma(num1, num2))

console.log(subtracao(num1, num2))

console.log(multiplicacao(num1, num2))

console.log(divisao(num1, num2))
















// outra resolução mais simples

// const sum = (a, b) => a + b
// const minus = (a, b) => a - b
// const plus = (a, b) => a * b
// const div = (a, b) => a / b

// let a = +(prompt("digite um numero"))
// let b = +(prompt("digite um numero"))

// console.log(sum(a, b))
// console.log(minus(a, b))
// console.log(plus(a, b))
// console.log(div(a, b))
