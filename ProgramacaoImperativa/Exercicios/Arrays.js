// 1. Criar um arquivo arrays.js

let filmes = ['star wars', 'clube da luta', 'o poderoso chefão', 'top gun', 'interestelar']

// 2. No mesmo arquivo, coloque todos os elementos em letras MAIÚSCULAS utilizando  .toUpperCase() para cada elemento.

for (let i = 0; i < filmes.length; i++){
    filmes[i] = filmes[i].toUpperCase()
}
console.log(filmes);

// 3. Enquanto trabalhava no exercício 2, descobrimos que também há outro array no código, mas com filmes animados. 
let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"]
cartoons.pop()

// 4. No mesmo arquivo, crie este array e uma função que adiciona cada elemento do array de desenhos animados (cartoons) ao array de filmes. 
function adiciona (De, Para){
    for (let i = 0; i < De.length; i++){
        Para.push(De[i])
    }
}
adiciona(cartoons, filmes)
console.log(filmes);

// 5. Um dos desenvolvedores avisou que a última animação é na verdade um jogo, então remova esse último elemento do array de desenhos animados (cartoons) antes de passá-los para os filmes.

// cartoons.pop()

// 6. Por fim, eles nos enviam dois arrays com as avaliações feitas por diferentes usuários do mundo desses filmes, da seguinte forma:

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]

// Eles nos pedem para criar uma função que compare as notas e nos diga se elas são iguais ou diferentes. Eles confirmam que estão na respectiva ordem e que trazem apenas valores numéricos de 1 a 10.

// Para verificar se tudo está bem até agora, recomendamos testar cada uma das funções e testar seu funcionamento correto.

function compara (scoreA, scoreB){
    for(let i = 0; i < scoreA.length; i++){
        if (scoreA[i] == scoreB[i]){
            console.log('Notas iguais na posição ' + [i] + ' do array')
        }
        else {
            console.log('Notas diferentes na posição ' + [i] + ' do array')
        }
    }
}
compara(asiaScores, euroScores)