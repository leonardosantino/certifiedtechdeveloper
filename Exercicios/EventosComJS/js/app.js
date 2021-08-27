const div = document.querySelector('div')
const p = document.querySelector('p')
const ul = document.querySelector('ul')
const form = document.createElement('form')

const buttonSubmit = document.createElement('input', 'button')
buttonSubmit.setAttribute('type', 'submit')
buttonSubmit.setAttribute('value', 'Enviar')

buttonSubmit.addEventListener('click', 
    function(event) {
        event.preventDefault();
    }
)

const buttonReset = document.createElement('input', 'button')
buttonReset.setAttribute('type', 'reset')
buttonReset.setAttribute('value', 'Reset')

const input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('name', 'name')

let onkeypress = 0
input.onkeypress = () => {

    onkeypress ++

}

p.onmouseover = () => {
    p.style.color = 'red'
}

p.onmouseout = () => {
    p.style.color = 'green'
}


buttonSubmit.onclick = () => {

    if (input.value.length > 0) {

        const li = document.createElement('li')
        li.innerHTML = `${input.value} - ${onkeypress} Teclas Pressionadas` 
        ul.appendChild(li)
        input.value = '';
        onkeypress = 0
        input.focus()
    }

}

form.appendChild(input)
form.appendChild(buttonSubmit)
form.appendChild(buttonReset)

div.appendChild(form)

window.onload = () => {
    alert('Página carregada com sucesso')
}