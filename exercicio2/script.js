// parte a

// let soma = (number1, number2) => {
    
//     return number1 + number2
    
// }

// console.log(soma(10, 55))

// outra resolução com prompt 

// let num1 = +prompt('Digite um número: ')
// let num2 = +prompt('Digite outro número, que será somado ao primeiro: ')

// const soma = (num1, num2) => {
//     let result = num1+num2
//     console.log(`${num1} + ${num2} = ${result}`)
//     return result
// }

// soma(num1, num2)

// parte b

// let analisa = (n1, n2) => {

//     return n1 >= n2

// }

// console.log(analisa(5, 10))

// usando if/else

// function boolean (num1, num2){

//     if(num1 >= num2){
//         console.log(true)
//     }else{
//         console.log(false)
//     }

// }

// boolean(10, 20)

// parte c

// let numPar = (numero) => {
//     if (numero % 2 === 0){
//         console.log('É um número par')
//     }else{
//         console.log('Não é um número par')
//     }
// }

// numPar(6)

// parte d

const perguntaBebida = prompt('Digite a sua bebida favorita: ')

const string = (bebida) => {

    console.log(`Você digitou: ${bebida.toUpperCase()} como sua bebida favorita. E ${bebida} contém: ${bebida.length} letras`)
}

string(perguntaBebida)

// mais simples

// const string = (mensagem) => {
//     console.log(mensagem.length)
//     console.log(mensagem.toUpperCase())

// }
// string("Palmeiras")