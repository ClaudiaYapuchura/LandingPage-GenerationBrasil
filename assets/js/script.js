let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let dataNasc = document.querySelector('#dataNasc')
let estado = document.querySelector('#estado')
let soube = document.querySelector('#soube')


function enviar() {
    if(nome.value == '' || email.value.indexOf('@') == -1 || dataNasc.value == '' || estado.options[estado.selectedIndex].value == '' || soube.options[soube.selectedIndex].value == '') {
        alert('Preencha corretamente todos os campos do formulário.')
    } else {
        alert('Formulário enviado com sucesso!')
    }
}

const menuItens = document.querySelectorAll('.menu a')

function getScrollTopByHref(element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}

function scrollToPosition(to) {
    window.scroll({
    top: to,
    behavior: "smooth"
    })
}

function scrollToIdOnClick(event) {
    event.preventDefault()
    const to = getScrollTopByHref(event.currentTarget) - 20
    scrollToPosition(to)
}

menuItens.forEach(item => {
    item.addEventListener('click',scrollToIdOnClick)
})