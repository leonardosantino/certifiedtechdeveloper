function podeSubir(altura, acompanhada){
    if(altura > 140 && altura < 200){
        return 'Acesso Liberado. É maior de 1.40m e menor de 2m'
    }
    else if(altura <= 140 && altura >= 120 && acompanhada){
        return 'Acesso Liberado. É menor de 140m e maior de 1.20m e está acompanhada'
    }
    else if(altura <= 140 && altura >= 120 && !acompanhada){
        return 'Acesso autorizado somente com acompanhante. É menor de 140m e maior de 1.20m e NÃO está desacompanhada,'
    }
    else{
        return 'Acesso Negado. Fora dos requisitos necessários'
    }
}

// console.log(podeSubir(199, false))

// console.log(podeSubir(120, true))
// console.log(podeSubir(140, true))

// console.log(podeSubir(120, false))
// console.log(podeSubir(140, false))


// console.log(podeSubir(119, false))
// console.log(podeSubir(200, false))
