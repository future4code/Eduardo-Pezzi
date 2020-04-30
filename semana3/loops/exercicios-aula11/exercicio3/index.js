let array = [11, 13, 18, 14, 15, 0, -20]
let maxNumeroAtual = array[0]

for (let numero of array) {
    if (numero > maxNumeroAtual) {
        maxNumeroAtual = numero
    }
}

console.log(maxNumeroAtual)