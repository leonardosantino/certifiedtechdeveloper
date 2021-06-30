//  1. Criar a função calcularIndiceDeMassaCorporal que receba a altura em centímetros e o peso em quilogramas e calcule o IMC do usuário (peso / altura2). Em seguida, execute a função testando diferentes valores.
// As 4 funções deverão receber dois parâmetros e retornar o resultado da operação matemática correspondente.
function calcularIndiceMassaCorporal(peso, altura){
    return peso/altura*altura;
};
console.log(calcularIndiceMassaCorporal(60, 171));

// 2. Criar as 4 “function expression” (dentro de variáveis) básicas de uma calculadora:
let soma = function(a, b){
    return a + b;
};
console.log(soma(8, 2));

let subtracao = function(a, b){
    return a - b;
};
console.log(subtracao(8, 2));

let multiplicacao = function(a, b){
    return a * b;
};
console.log(multiplicacao(8, 2));

console.log()

let divisao = function(a, b){
    return a / b;
};
console.log(divisao(8, 2));