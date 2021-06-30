let conta = {
    numeroConta: 25290,
    saldo: 10,
    nomeTitular: 'Leonardo',
    deposito: (depValor) => {
        conta.saldo += depValor
        console.log('Saldo Anterior: R$', conta.saldo-depValor, '\nDepósito Realizado: R$', depValor,'\nSaldo: R$', conta.saldo,'\n') 
    },
    saque: (saqValor) => {
        if (conta.saldo >= saqValor){
            conta.saldo -= saqValor
            console.log('Saldo Anterior: R$', conta.saldo+saqValor, '\nSaque Realizado: R$', saqValor,'\nSaldo: R$', conta.saldo,'\n')
        }
        else {
            console.log('Fundos Insuficientes', '\nSaldo Atual: R$', conta.saldo, '\nValor Solicitado: R$', saqValor)
        }
    }
}
function MinhaConta (cliente, operacao, valor){
    this.cliente = cliente
    
    if (operacao == 'saque'){
        console.log('Bem Vindo!', cliente.nomeTitular, '\nconta:', cliente.numeroConta)
       return cliente.saque(valor)
    }
    else if (operacao == 'deposito'){
        console.log('Bem Vindo!', cliente.nomeTitular, '\nconta:', cliente.numeroConta)
        return cliente.deposito(valor)
    }
    else {
        return console.log('Operação Inválida')
    }
}
let depositoDe25 = new MinhaConta(conta, 'deposito', 25)
console.log(depositoDe25)
let saqueDe13 = new MinhaConta(conta, 'saque', 13)
console.log(saqueDe13)
let saqueDe25 = new MinhaConta(conta, 'saque', 25)
console.log(saqueDe25)