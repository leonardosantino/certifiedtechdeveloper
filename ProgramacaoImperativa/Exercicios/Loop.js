// 1. Percorra o array abaixo e exiba seus elementos:

const pontos = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90]
for (let i = 0; i < pontos.length; i++){
    // console.log(pontos[i])
}

// 2. Crie um array com valores diversos, percorra-o, altere e mostre seus elementos:

let informacoes = ['Leonardo', 'Santino', 29, true]
for (let i = 0; i < informacoes.length;i++){
    
    if([i] == 0){
        informacoes[0] = 'Jéssica'
    }
    if ([i] == 1){
        informacoes[1] = 'Mendes'
    }
    if ([i] == 2){
        informacoes[2] = 20
    }
    if ([i] == 3){
        informacoes[3] = false
    }
}
// console.log(informacoes)

// 3 . Crie outro array, percorra-o, altere, salve e exiba seus elementos:
//  Neste exercício, utilize funções e domínios separados, ou seja, salvar é uma coisa e exibir é outra. Sendo assim, nem tudo deve ser feito junto.

let pesssoal = ['Leonardo', 'Santino', 29]

function altera (nome, sobrenome, idade, dados){
    for (let i = 0; i < dados.length;i++){
        dados[0] = nome
        dados[1] = sobrenome
        dados[2] = idade
        // console.log(dados)
    }
}
altera('Marcos', 'Paulo', 25, pesssoal)

//  4. Crie um último array, percorra-o, selecione os elementos, salve e mostre-os:

let filmes = ['Star Wars', 'Star Trek', 'Matrix']

//  Extra
// Multiplos de 11
let multiplosDe11 = []
for (let i = 1; i <= 25; i++){
    multiplosDe11.push([i]*11)
}
// console.log(multiplosDe11.join('-'))

// Multiplos de 25

let multiplosDe8  = []
for (let i = 1; i <= 62; i++){
    multiplosDe8.push([i]*8)
}
// console.log(multiplosDe8.join('-'))

// Tabuada do 5

function Tabuada(numero){
    for(let i = 1; i <= 10;i++){
        console.log(numero + ' x ' + i + ' = ' + numero*i)
    }
}
Tabuada(5)