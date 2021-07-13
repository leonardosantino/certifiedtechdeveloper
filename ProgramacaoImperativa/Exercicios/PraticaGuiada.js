// 1
let produtos = [
    {nome: 'computador', valor: 2500.49, qualidade: 86, status: true},
    {nome: 'smartphone', valor: 1500.99, qualidade: 98, status: true},
    {nome: 'tv', valor: 1200.79, qualidade: 74, status: true},
    {nome: 'camera', valor: 600.57, qualidade: 75, status: false}
];

// 2
let carrinho = produtos.filter((produtos)=>{
    let valor = produtos.valor
    let qualidade = produtos.qualidade
    let status = produtos.status

    let selecionado = (valor >= 482 && valor <= 1600) && (qualidade >= 60) && (status == true)
    return selecionado
})
console.log(...carrinho)

// 3
carrinho.forEach((produto)=>{
    console.log('Produto:', produto.nome)
    console.log('Valor:', produto.valor, '\n')
})

// 4
let total = carrinho.reduce((acumm, produto)=>{
    return acumm.valor + produto.valor
})
console.log(total)