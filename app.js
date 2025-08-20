'use strict'

var button = document.getElementById('mult')
var multiplicador = 10

function multiplicar() {
    let i = 0
    let resultado
    let idt = 1
    let multiplicando
    while (i <= multiplicador) {
        multiplicando = document.getElementById('texto').value
        resultado = Number(multiplicando) * i
        let imprint = document.getElementById(`${idt}`)
        let mensagem = `${multiplicando} x ${i} = ${resultado}`
        imprint.innerHTML = ""
        imprint.innerHTML = mensagem
        i++
        idt++
    }
}

button.addEventListener('click', multiplicar)