function composicao(fn1, fn2, fn3, valor) {
    return fn3(fn2(fn1(valor)))
}

function gritar (texto) {
    return texto.toUpperCase()
}

function enfatizar (texto) {
    return '${texto}!!!!!'
}

function solicitar (texto) {
    return texto.split('').join(' ')
}

const resultado = composicao(
    gritar
    enfatizar
    solicitar
)('ARRAYYYYYYYYYYYYYYYYY')

console.log(resultado)
