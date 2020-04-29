let soma = 0
let zeroNaoFoiDigitado = true

while(zeroNaoFoiDigitado) {
    let numeroDigitado = prompt("Digite um número:")
    numeroDigitado = Number(numeroDigitado)
    
    soma = soma + numeroDigitado

    if (numeroDigitado === 0) {
        zeroNaoFoiDigitado = false
    }

}

console.log(soma)