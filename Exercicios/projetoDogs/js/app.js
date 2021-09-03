// Selecionar elementos para iserção do conteudo
const container = document.querySelector('.grid-container')
const urlimg = document.getElementById('urlimg')
const descricao = document.getElementById('descricao')
const form = document.querySelector('form')

// Função onsubmit é acionada quando o botão submit e pressionado
form.onsubmit = function (event) {
  // previnir a pagina de recarregar e perder os dados quando o botão submit for pressionado
  event.preventDefault();

  // criar div para atribuir o conteudo dentro dela
  const div = document.createElement('div')

  // Inserir dentro dessa div o conteudo dos inputs
  div.innerHTML = `<img class='grid-item grid-item-2 img-fluid' src="${urlimg.value}" alt="">`
  div.innerHTML += `<p>${descricao.value}</p>`

  // fazer o append da div dentro do container no body
  container.appendChild(div)

  // resetar valores dos inputs
  urlimg.value = ''
  descricao.value = ''
  
}