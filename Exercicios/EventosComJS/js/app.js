const main = document.querySelector('main')
const form = document.createElement('form')
const lista = document.getElementById('lista')

const buttonA = document.createElement('input', 'button')
buttonA.setAttribute('type', 'submit')
buttonA.setAttribute('value', 'Enviar')

buttonA.addEventListener('click', 
    function(event) {
        event.preventDefault();
    }
)

const buttonB = document.createElement('input', 'button')
buttonB.setAttribute('type', 'reset')
buttonB.setAttribute('value', 'Reset')

const inputA = document.createElement('input')
inputA.setAttribute('type', 'text')
inputA.setAttribute('name', 'name')

inputA.onmouseover = () => {
    inputA.style.color = 'red'
}

inputA.onmouseout = () => {
    inputA.style.color = 'green'
}

const inputB = document.createElement('input')
inputB.setAttribute('type', 'text')
inputB.setAttribute('name', 'name')

inputB.onkeypress = () => {

    const li = document.createElement('li')
    li.innerHTML = inputB.value
    lista.appendChild(li)
    inputB.value = '';
    inputB.focus()

}

form.appendChild(inputA)
form.appendChild(inputB)

form.appendChild(buttonA)
form.appendChild(buttonB)

main.appendChild(form)

window.onload = () => {
    alert('Carregou')
}