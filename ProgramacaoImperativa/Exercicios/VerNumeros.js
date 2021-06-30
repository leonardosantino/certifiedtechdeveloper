let numerosPrimos = [3, 7, 11, 13, 17, 19]
let numeros = [2, 4, 6, 8, 10, numerosPrimos]
// numeros += [,numerosPrimos]
console.log(numeros)

function maiorNumero(...parametros){
    return Math.min(...parametros)
}
// console.log( maiorNumero(2,3,4,5,6))