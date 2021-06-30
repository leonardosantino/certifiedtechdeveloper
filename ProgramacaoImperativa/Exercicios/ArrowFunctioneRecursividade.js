let fatorial = numero => {
    let resultado = numero
    for (let i = 1; i < numero; i++){
        resultado *= i 
    }
    console.log(resultado)
}
fatorial(13)
// Recursividade
let fatorialFunction = numero => {
    if (numero > 1) {
       return numero * fatorialFunction (numero-1)
    }
    return numero
}
console.log(fatorialFunction(13))