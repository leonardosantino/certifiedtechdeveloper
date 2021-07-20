
// 3 Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

// 4 Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

// 5 Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

// 6 Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.

let Aluno = require('./modulos/aluno');
let estudantes = require('./modulos/estudantes')

let curso = {
    nomeDoCurso: 'matematica',
    notaDeAprovacao: 7,
    faltasMaximas: 5,
    listaDeEstudantes: estudantes,
    //  o método que permite adicionar alunos à lista do curso
    adicionar: function (adicionar) { return this.listaDeEstudantes.push(adicionar) },
    // método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação
    resultado: function (aluno) {
        // curso.resultado(nome do aluno) invoca a funcao calcularMedia que está dentro do objeto aluno
        if (aluno.calcularMedia(aluno.notas) >= this.notaDeAprovacao && aluno.faltas < this.faltasMaximas) {
            return true
        }
        else if (aluno.calcularMedia(aluno.notas) >= (this.notaDeAprovacao * 1.1) && aluno.faltas == this.faltasMaximas) {
            return true
        }
        else {
            return false
        }
    },
    // percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não 
    validarAlunos: function () {
        this.listaDeEstudantes.forEach((elemento) => {
            this.resultado(elemento) ?
                console.log(elemento.nome, '- Média:', elemento.calcularMedia(), '- Faltas:', elemento.faltas, '- APROVADO') :
                console.log(elemento.nome, '- Média:', elemento.calcularMedia(), '- Faltas:', elemento.faltas, '- REPROVADO');
        })
    }
}

// TESTE de Métodos

// metodo adicionar aluno ao curso
let manolo = new Aluno('MANOLO', 5, [10, 10, 10, 10]);
curso.adicionar(manolo)

// método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação
console.log(curso.resultado(manolo), '- verifica se MANOLO PASSOU')

// percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não 
curso.validarAlunos()