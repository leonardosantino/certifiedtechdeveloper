// Função construtora para atribuir alunos e suas notas
function Aluno(nome, notas) {

    this.notas = notas;
    this.nome = nome;

    // Função para calcular média
    this.calcularMedia = function ()  {
        return this.notas.reduce(
            (acumulador, num) => acumulador += num) / this.notas.length
    }
    // Função para concatenar todos os resultados e exibir
    this.resultado = function () {
        let situacao;
        let media = this.calcularMedia()

        if (media >=7) {situacao = 'Aprovado'}
        else {situacao = 'Reprovado'}

        return `${nome} | Média Final: ${media} | Situação: ${situacao} \nNotas: 1 bimestre: ${notas[0]} | 2 bimestre: ${notas[1]} | 3 bimestre: ${notas[2]} | 4 bimestre: ${notas[3]} \n` 
    }
}
//  Atribuição de alunos e notas
let leonardo = new Aluno('Leonardo', [10,8,9,7]);
let ana = new Aluno('Ana', [6, 7, 7, 7])
// Exibir alunos
console.log(leonardo.resultado())
console.log(ana.resultado())