'use strict'

var button = document.getElementById('mult')
var multiplicador = 10
var i = 0
var resultado
var idt = 1

function multiplicar() {
    let multiplicando = document.getElementById('texto').value
    while (i <= multiplicador) {
        resultado = Number(multiplicando) * i
        let imprint = document.getElementById(`${idt}`)
        let mensagem = `${multiplicando} x ${i} = ${resultado}`
        imprint.textContent = mensagem
        i++
        idt++
    }
}

button.addEventListener('click', multiplicar)





