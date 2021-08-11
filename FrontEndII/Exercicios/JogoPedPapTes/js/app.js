// Declaração de todas as variáveis a serem utilizadas
let jogador, computer, winner, vitjogador = 0, vitcomputador = 0, empates = 0;

// Calculo para a escolha do computador
let calculo = () => {
    let computer = Math.random();
    if(computer < 0.33){return computer = 'papel'}
    else if (computer > 0.33 && computer < 0.66){ return computer = 'pedra'}
    else {return computer = 'tesoura'}
}

// Resultado de cada partida do jogo
let resultado = () => {
    switch(jogador) {
        case "pedra":
            if(computer == 'tesoura'){ return 'Jogador Venceu!'}
            else if (computer == 'papel'){return 'Computador Venceu!'}
            else {return 'Empate!'}
        case "papel":
            if(computer == 'pedra'){ return 'Jogador Venceu!'}
            else if (computer == 'tesoura'){return 'Computador Venceu!'}
            else { return 'Empate!'}
        case "tesoura":
            if(computer == 'papel'){return 'Jogador Venceu!'}
            else if (computer == 'pedra'){return 'Computador Venceu!'}
            else {return 'Empate!'}
    }
}

// Numero de partidas a serem realizadas e o resultado final
let finalResult = () => {
    // Executa o jogo tres vezes
    for (i = 0; i < 3; i++){
        jogador = prompt('pedra, papel ou tesoura?')
        computer = calculo()
        winner = resultado()

        // a cada partida exibe o resultado na página
        document.querySelector('h4').innerText += `JOGADOR: ${jogador} \nCOMPUTADOR: ${computer} \n\nResultado: ${winner}\n\n\n`

        // incrementa o resultado para o resultado final   
        if(winner == 'Jogador Venceu!') {vitjogador ++}
        else if (winner == 'Computador Venceu!'){vitcomputador ++}
        else { empates ++}
    }
    // Verifica o resultado final
    if (vitjogador > vitcomputador) {winner = "O HUMANO É QUASE UM COMPUTADOR !"}
    else if ( vitcomputador > vitjogador) {winner = "COMPUTADOR IMBATÍVEL !"}
    else {winner = "Empate"}
    // Exibi o resultado final
     document.querySelector('h2').innerText += `VITORIAS JOGADOR: ${vitjogador} \nVITORIAS COMPUTADOR: ${vitcomputador} \nEMPATES: ${empates} \n\nRESULTADO FINAL: ${winner}`

}
// Executa a função
finalResult()