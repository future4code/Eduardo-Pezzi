// Exercício 1:
/*
let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)
*/
// Resposta: O código acima inicia uma variável sum com valor 0, faz um for  iniciando uma variável i com valor 0
//o for irá incrementar a variável i até chegar ao valor de 15, após o incrementoa variável sum também será 
// incrementada com o valor atual de sum +1 a cada "passagem" no final será impresso o valor de sum que deverá ser
// 15.

// Exercício 2:
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}

console.log(novaLista)
*/
// a) o comando push irá acrescentar valores no array novaLista.
// b) [10, 15, 25, 30]
// c) [12, 15, 18, 21, 27, 30 ] e [12]

/*
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

maior = arrayOriginal[0];
menor = arrayOriginal[0];

for (let i = 0; i < arrayOriginal.length; i++){
        let posicao = arrayOriginal[i]
        if(posicao > maior){
                maior = posicao;
        }
        if (posicao < menor){
                menor = posicao
        }
        
}
console.log("O maior número é o ", + maior , "e o menor é o ", + menor);
*/

/*
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let novoArray = [];

for (let i = 0; i < arrayOriginal.length; i++){
        let posicao = arrayOriginal[i]
        posicaoDividido = (posicao/10);
        novoArray.push(posicaoDividido);  
}
console.log(`Habemus novo array ${novoArray}`)
*/
/*
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

for (let i = 0; i < arrayOriginal.length; i++){
        let posicao = arrayOriginal[i]
        if(posicao %2 == 0){
                par = posicao;
        
}
console.log("Os números pares são:", + par);
}
*/

/*
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let novoArray = [];

for (let i = 0; i < arrayOriginal.length; i++){
        let posicao = arrayOriginal[i]
        let string = (`\n O elemento do índex ${i} é ${posicao} \n`)
        novoArray.push(string);  
}
console.log(`Habemus novo array ${novoArray}`)
*/

// Desafio 2:

let acertou = 0;
let tentativas = 0;

while(acertou == 0){
        let pensamento = prompt("Pense em um número e digite ele: ")
        let chute = prompt("É bom de chute? Quero ver, qual o seu? ")
        if (chute === pensamento) {
                acertou = 1;
                tentativas = (tentativas+1);
        }
console.log(`Parabéns, você acertou o chute ${chute} com ${tentativas} tentativas! `);
}
