// Exercício 1--------------------- Comentários por trechos.

/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
//Resultado: false.

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
//Resultado: false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
//Resultado: true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
//Resultado: false

console.log("e. ", typeof resultado)
//Resposta: Boolean
*/

// Exercício 2 --------------------------------------------

/*
let array
console.log('I. ', array)
// Resposta: Undefined

array = null
console.log('II. ', array)
// Resposta: Null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)
//Resposta: 11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])
//Resposta: 3 e 4

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)
//Resposta: 19 e 9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])
//Resposta: 3

i = array.length - 1 // = 10
array[i] = array[i-3] // = 7
const resultadoC = array[i]%array[1] // = 1
console.log('VII. ', resultadoC)
//Resposta: 1

*/


/*

a. O que é `array` e como se declara em `JS`?
Resposta: Array é um vetor que comporta diversos valores.
variavelQualquer = [valor0, valor1, valor2, valor3, valor4, valor5, ...valor(n)]

b. Qual o index inicial de um `array`?
Resposta: Todo array inicia com seu valor 0, o elemento na posição zero.

c. Como se determinar o tamanho do `array`?
Resposta: seu tamanho se dá pela quantidade de valores/elementos em seu array.
posso consultar esse valor através do lenght.

d. Indique todas as mensagens impressas no console.

*/


/*    let fahrenheitToK = (fahrenheit - 32) * 5/9 + 273.15
      let celsiusToF = (celsius) * 9/5 + 32
      let fahrenheitToC = (fahrenheit - 32) / 1.8                 */


// 1- Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também

      /* let fahrenheit = 77;
      let fahrenheitToK = (fahrenheit - 32) * 5/9 + 273.15
      console.log (fahrenheitToK) */

// 2- Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

    /*
    let celsius = 80;
    let celsiusToF = (celsius) * 9/5 + 32
    console.log (celsiusToF)
    */

// 3- Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

    /*
    let celsius = 30;
    fahrenheit = ((celsius) * 9/5 + 32);
    console.log (fahrenheit)

    resultado = (fahrenheit - 32) * 5/9 + 273.15
    console.log (resultado)
    */

// 4- Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.

    /*
    celsius = prompt("Digite o valor em Celsius")
    fahrenheit = ((celsius) * 9/5 + 32);
    console.log (fahrenheit)

    resultado = (fahrenheit - 32) * 5/9 + 273.15
    console.log (resultado)
    */

    /* ---------------------------------------------------------------- */

    /*
    Faça um programa que faça 5 perguntas para o usuário
    (pode ser criativo nesta parte). Imprima-as com as respostas no console da seguinte forma:
    */

    /*
    resposta1 = prompt("Você gosta de pizza? Respostas válidas (SIM e CLARO)")
    console.log (resposta1)

    resposta2 = prompt("Sou o melhor programador JS que você já conheceu? Respostas válidas: (SIM e CLARO)")
    console.log (resposta2)

    resposta3 = prompt("E full stack? Respostas válidas: Acho q já imagina né?")
    console.log (resposta3)

    resposta4 = prompt("Eu sou o melhor profissional de TI que já existiu? Respostas válidas: Preciso dizer ainda?")
    console.log (resposta4)

    resposta5 = prompt("Você acreditaria se eu dissesse que minha modéstia me precede? hum...nem vou falar nada hein")
    console.log(resposta5)
    */

    // -----------------------------------------------------------------------

    /*
    Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o 
    consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia
    custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.*/

    /*
    a- Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
    b- Altere o programa para receber mais um valor: a porcentagem de desconto. 
    Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto */
    /*
    const tarifa = 0.05;
    consumo = 280.00;
    console.log(consumo * tarifa);
    console.log("Com desconto de 15%, o novo valor é:", + (consumo * tarifa) * 0.85)
    */

    // Desafio Nº 1:

    // A) Conversão de libra para kg:

            /*
            libra = 20;
            libraPraKg = (libra / 2.205).toFixed(3);
            console.log("20 libras equivalem a ", + libraPraKg ,"Kg");
            */

    //  B) Conversão de Onça(oz) para Kg:

            /*
            oz = 10.5
            ozPraKg = (oz / 3.5274).toFixed(3);
            console.log("10.5 Oz equivalem a", + ozPraKg, "Kg");
            */

    //  C) Conversão de Milha para metro:

            /*
            milha = 100;
            milhaPraMetro = (milha * 1609).toFixed(3);
            console.log("100 milhas equivalem a", + milhaPraMetro, "Metros");
            */

    //  D) Conversão de pés ft para metro:

            /*
            ft = 50;
            ftPraMetr = (ft / 3.281).toFixed(3);
            console.log("50ft equivalem a", + ftPraMetr, "metros")
            */

    //  G) Pedir ao usuário para entrar com o valor:

            libra1 = prompt("Digite o valor em Libra a ser convertido:")
            libraPraKg = (Number(libra1) / 2.205).toFixed(3);
            console.log( libra1, "libras equivalem a ", + libraPraKg ,"Kg");

    
    







   