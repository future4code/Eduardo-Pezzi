// Questão 1:

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// Resposta: basicamente verifica se o número digitado pelo usuário no prompt é par ou ímpar.
// sendo par a mensagem "Passou no teste" é mostrada caso contrário a mensagem é "Não passou no teste".

//Questão 2:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


//Este código solicita ao usuário que ele informe uma fruta via prompt e o switch case verifica o valor
// de entrada, caso seja uma das opções o valor é armazenado na variável preco para logo abaixo ser exibida
// na mensagem do console.
//Caso o usuário digite maca a mensagem será: "O preço da fruta Maça é R$ 2.25".
// Para a compra de 2 laranjas, 1 maçã, 3 bananas e uva o valor seria: R$ 14,55.
// A mensagem seria "O preço da fruta Pêra é de R$ 5,50"

//Questão 3:
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)

// Considerando 3 e 4:
// Ambos são maiores que zero, a condição pai é atendida e entraremos no bloco, a variável mensagem é iniciada.
// como o primeiro num é menor que o segundo num a condição else é atendida, a variável mensagem dentro do 
// bloco filho é inicializada e recebe a string.
// porém o console solicita a exibição da variável mensagem dentro do bloco pai, e neste momento a variável
// está inicializada porém, sem conteúdo, veremos um erro.

*/ // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Exercício 4:
// A)
/*

let num1 = prompt("Digite o primeiro número: ")
let num2 = prompt("Digite o segundo número: ")

if (Number(num1) > Number(num2)) {
        console.log(`O número ${num1} é maior que o número ${num2}`)

}       else if (Number(num2) > Number(num1)) {
                console.log(`O número ${num2} é maior que o número ${num1}`)      
}
else {
        console.log("Os números são iguais")
}
*/

// B)

let numero1 = prompt("Digite o primeiro número: ");
let numero2 = prompt("Digite o segundo número: ");
let numero3 = prompt("Digite o terceiro número: ");

let num1 = Number(numero1);
let num2 = Number(numero2);
let num3 = Number(numero3);


if (num1 > num2 && num1 > num3){
        let maior = num1;

        if (num2 > num3){
                let medio = num2;
                let menor = num3;
        } else  {
                let medio = num3;
                let menor = num2;
        }
        console.log(`Numeros na ordem: ${maior}, ${medio}, ${menor}`);
}
 
         if (num2 > num1 && num2 > num3 ){
                let maior = num2;

                if (num1 > num3) {
                        let medio = num1;
                        let menor = num3;
        }       else {
                        let medio = num3;
                        let menor = num1;
        }
        console.log(`Numeros na ordem: ${maior}, ${medio}, ${menor}`);
    }


else if (num3 > num2 && num3 > num1){
        let maior = num3;

        if (num2 > num1){
                let medio = num2;
                let menor = num1;
        }else{
                let medio = num1;
                let menor = num2;
        }
        console.log(`Numeros na ordem: ${maior}, ${medio}, ${menor}`);
}
// Exercício 5:



