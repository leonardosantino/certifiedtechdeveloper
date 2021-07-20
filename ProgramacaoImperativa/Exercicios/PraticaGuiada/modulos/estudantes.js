// 7 Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).

let Aluno = require('./aluno');

let leonardo = new Aluno('LEONARDO', 5, [10, 8, 6, 6]);
let joao = new Aluno('JOAO', 5, [9, 8, 8, 6]);
let maria = new Aluno('MARIA', 8, [10, 9, 8, 7]);
let erica = new Aluno('ERICA', 8, [10, 9, 8, 7]);

let estudantes = [leonardo, joao, maria, erica]

module.exports = estudantes;