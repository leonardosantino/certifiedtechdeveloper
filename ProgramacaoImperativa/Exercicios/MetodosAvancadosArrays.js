// Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().
let arrayNumeros = [10, 20, 30, 40];
let mapReduce = (paramArray) => {
    return paramArray.map((paramNumero) => {
        return paramNumero / paramArray.reduce((accum, numero)=>{
            return accum + numero
        });
    });
};
// console.log(mapReduce(arrayNumeros))

// Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())
let arrayPalavras = ['A', 'B', 'C', 'Pá', 'Pé', 'Nó', 'Bum','Rum','Som','Café','Giro','Roda','Porta','Morta','Cobra','Ladrão','Cantar','Correr','Lâmpada', 'Alguém'];
let funcPalavras = (palavras, numero) => {
    return palavras.filter((paramPalavra)=> {
        return paramPalavra.length > numero
    });
};
// console.log(funcPalavras(arrayPalavras, 5))

// Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: 
let arrayObjeto = [
    {nome: 'Daniel', nota: 9},
    {nome: 'Alicia', nota: 8},
    {nome: 'Beatriz', nota: 10},
    {nome: 'Carlos', nota: 8},
    {nome: 'Alicia', nota: 7}
]

// Ordenar por nome
arrayObjeto.sort((a, b) => {
    return a.nome > b.nome? 1: -1;
});
// console.log(...arrayObjeto)

// Ordenar por nota
arrayObjeto.sort((a, b) => {
    return b.nota - a.nota
  });
// console.log(...arrayObjeto)