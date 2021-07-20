// 1 Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

// 2 Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;

    this.calcularMedia = () => {
        return this.notas.reduce((acumulador, num) => acumulador += num) / this.notas.length
    };
    this.metodoFaltas = () => {
        return this.faltas += 1
    }
}
module.exports = Aluno;

// Teste de Métodos
let jessica = new Aluno('jessica', 0, [10, 8, 7, 6]);

// linkado com curos, deixar console.log comentado.

// console.log(jessica.calcularMedia(), '- verifica média da jéssica')
// console.log(jessica.metodoFaltas(), '- aumenta faltas da jéssica')