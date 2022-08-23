// // parte a

// function OlaPessoa (){
//     console.log("Olá Daniel")
// }

// OlaPessoa()

// // com prompt

// let DigiteNome = prompt("Qual é o seu nome? ")

// function nome (){
//     console.log(`Oi, ${DigiteNome}.`)

// }

// nome()

// parte b

// function tabuada(numero){
//     for(let i = 1; i <= 10; i++){
//         let resultado = numero * i
//         console.log(`${numero} x ${i} = ${resultado}`)
//     }
// }

// tabuada(6)

// parte c

let tabuada = (numero) => {
    for(let i = 1; i <= 10; i++){
        let resultado = numero * i
        console.log(`${numero} x ${i} = ${resultado}`)
    }
}

tabuada(6)