let aluno = {
    nome: 'Leonardo',
    numeroDoArquivo: 3,
    listaDeNotas: [10, 8, 7, 8],
    media: (...notas) => {
        return notas.reduce((acumulador,num) => acumulador += num) / notas.length
    }
}

function Aluno (nome){
    this.nome = nome
    let media = nome.media(...nome.listaDeNotas)
    if  (media >= 7)
    console.log (
        'Nome do Aluno:', nome.nome,
        '\nNúmero do Arquivo:', nome.numeroDoArquivo,
        '\nMédia do Aluno', media,
        '\nAprovado !'
    )
    else {
        console.log (
            'Nome do Aluno:', nome.nome,
            '\nNúmero do Arquivo:', nome.numeroDoArquivo,
            '\nMédia do Aluno', media,
            '\nReprovado !'
        )
    }
}
Aluno(aluno)