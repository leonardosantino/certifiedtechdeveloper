// 4. Criar as variáveis, nomeJogador, golsJogador, precoEmDolares. Depois, criar a função fazerGol que incremente a quantidade de gols do jogador em uma unidade e, em seguida, imprima em tela a mensagem “GOL!!!!!!!!!”. Além disso, incremente o valor do jogador em 10.000 dólares. Por conseguinte, teste a execução da função várias vezes e imprima em tela a nova quantidade de gols do jogador e o preço do jogador no mercado.

let nomeJogador = 'Zezinho'; let golsJogador = 1; let precoEmDolares = 10000; 

function fazerGol(){
    golsJogador++
    precoEmDolares += 10000
    return console.log('Gol !!!', '/ Total de Gols ' + golsJogador, '/ Preço Jogador US$ ' + precoEmDolares.toLocaleString())
}
fazerGol()
fazerGol()
fazerGol()
fazerGol()

// 5. Criar a função hatTrick (expressão usada para dizer que um jogador fez 3 gols em uma mesma partida) que em seu interior execute três vezes a função fazerGol e, em seguida, aumente o valor do jogador em 10% a mais por ano em comparação com o valor atual.

function hatTrick(){
    fazerGol()
    fazerGol()
    fazerGol()
    precoEmDolares *= 1.10
    return console.log('Preço mais 10 % é US$ ' + precoEmDolares.toLocaleString())
}
hatTrick()