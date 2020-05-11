// Interpretação de código.

// 1 - 

/*

O nome da função deixa claro seu objetivo, converter moeda de acordo com a cotação fornecedia
isso é feito pegando o valor que o usuário fornece já convertida em número através de number()
a função retornará o parâmetro (valor a ser convertido) multiplicando pela cotação. A chamada
abaixo fornecer parâmetro 100 para que seja convertido com a cotação previamente fornecida.
No console, será impresso através da variável meuDinheiro o valor convertido.

Console: 575
OBS: Cotação de US$ 5,75 obtida hoje 08/05/2020 - antes do fechamento da BOVESPA.
sujeito a alteração ao fim do dia.

*/

// 2 -

/*

A função tem por objetivo simular investimentos e sua liquidez de acordo com a alíquota
já fornecida, um seletor de caso (switch case) é usado para que, dependendo do tipo de
investimento, uma ação seja tomada e um cálculo seja feito, por padrão, se nenhum valor
forncido na chamada da funçao for atendido o usuário receberá a mensagem "TIPO DE INVES-
TIMENTO INCORRETO". Duas variáveis são fornecdidas com 2 valores de montantes e investimen
tos diferentes (novoMontante e segundoMontante, respectivamente) a primeira variável 
nos dá a opção Ações e o valor de 150 que irá coincidir com a opção Ações do switch case.
Já a segunda variável nos fornece Tesouro direito e o valor de 200, não temos essa opção
no switch case, neste caso o usuário recebrá a mensagem default, o padrão.

Console: 
novoMontante: 165
segundoMontante: TIPO DE INVESTIMENTO INCORRETO

*/

// 3-

/*

Um for é feito usando a variável numero para pegar os elemento do array numeros, previamene
iniciado e fornecido, se o valor do índice numero referente ao array numeros for mod 2 =0,
ou seja: se for divisível por 2 (sobrar resto zero = mod) um array push será realizado para
incluir valores no araay1, já fornecido e vazio, caso contrário o push será feito no array2
também fornecido e vazio. No final é solicitado a impressão no console do tamanho dos 3 arrays
e não seus valores.

Console: 
numeros.length = 14
array1.length = 6
array2.length = 8

*/

// 4-

/*

O loop for irá percorrer os valores do array numeros previamente fornecido e usará a variável
numero para armazenar seus valores, com isso o IF verificará se o valor sendo avaliado no
momento é menor que a variável 'numero1' iniciada com o valor infinity, sendo essa condição
verdadeira a variável numero1 receberá o valor da variável numero, a condição abaixo verifica
se é  maior, caso positivo a variável número2 receberá o valor de numero.

Console:
numero1 = 1590
numero2 = 1590

*/
//---------------------------------------


// Exercícios de lógica de programação:

// 1-

/*
Podemos usar o For , o For of e o map.

arrayQualquer = [10, 20, 30, 40, 50];

for (Indice of arrayQualquer);
       if (Indice % 2 ==0){
         alert("Está feito o exemplo")
         console.log("está feito o exemplo")
       }

*/

// 2-

/*
a) false
b) false
c) true
d) false
e) true

*/

// 3- 

// não, o código não funcionará.

/*

const quantidadeDeNumerosPares
let i = 5
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
}
*/

// 4-



// 5- 

/*
let num1 = prompt("Digite o primeiro número: ")
let num2 = prompt("Digite o segundo número: ")
console.log(`O Primeiro número escolhido foi ${num1} e o segundo foi ${num2}`)
let maior
let menor

if (Number(num1) > Number(num2)){
    
  maior = num1
  menor = num2

  console.log(`O maior número é o ${maior} e o menor é o ${menor}`)

}

if (num1 % num2 == 0) {

  console.log(`O número ${num1} é divisível por ${num2}`)

} else {

  console.log(`o número ${num1} não é divisivel por ${num2}`)

}

if (num2 % num1 == 0) {
  
  console.log(`O número ${num2} é divisível por ${num1}`)

} else {

  console.log(`O número ${num2} não é divisível por ${num1}`)

}

*/








