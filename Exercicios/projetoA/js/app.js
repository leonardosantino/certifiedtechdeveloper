// Selecionar elementos para iserção do conteudo
const container = document.querySelector('.grid-container')
const urlimg = document.getElementById('urlimg')
const descricao = document.getElementById('descricao')
const form = document.querySelector('form')

// Função para acionar o button e inserir o conteudo
form.onsubmit = function (event) {
  event.preventDefault();

  // criar div para atribuir o conteudo
  const div = document.createElement('div')

  // Inserir dentro dessa div o conteudo dos inputs
  div.innerHTML = `<img class='grid-item grid-item-2 img-fluid' src="${urlimg.value}" alt="">`
  div.innerHTML += `<p>${descricao.value}</p>`

  // fazer o append da div dentro do container
  container.appendChild(div)

  // resetar valores dos inputs
  urlimg.value = ''
  descricao.value = ''
  
}