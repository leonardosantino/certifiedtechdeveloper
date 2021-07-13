// MAP
let numPares = [2, 4, 6, 8, 10, 12];
let numImpares = numPares.map((num) => {
    return num -1
});
// console.log(...numImpares)
// FILTER
let nomes = ['Julia', 'Maria', 'Alessandra', 'Debora', 'Maria', 'Rute'];
let nomesSelec = nomes.filter((nome) =>{
    return nome == 'Maria'
});
// console.log(...nomesSelec);
// REDUCE
let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrayFormat = arrayNum.reduce((accum, numero)=>{
    return accum + '-' + numero
});
console.log(arrayFormat)
// FOREACH
let animais = ['Gato','Cachorro', 'Elefante', 'Homem'];
let mostreAnimal = animais.forEach((animal)=>{
    // console.log('O animal é', animal);
});
// console.log(mostreAnimal)