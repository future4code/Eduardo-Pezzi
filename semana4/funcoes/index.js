/*
Exercício 1:

const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
        return array
}
*/
// Respostas:
// minhafuncao(2) = Array vazio [0]
// minhafuncao(5) = Array [6]
// minhafuncao(8) = Array [12]


//Exercício 2:
/*
let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));
*/
// Respostas:
// As saídas serão: 0,2 e undefined
// Não funcionariam pois os valores Darvas, João não estariam mais no array, já o valor Paula não está no atual array.

// Exercício 3:
/*
function metodo(array) {
        let resultadoA = 0;
        let resultadoB = 1;
        let arrayFinal = [];
      
        for (let x of array) {
          resultadoA += x;
          resultadoB *= x;
        }
      
        arrayFinal.push(resultadoA);
        arrayFinal.push(resultadoB);
        return arrayFinal;
      }
*/
// 

function humanToDog (valor){
        let sum = (valor * 7)
}
console.log(humanToDog(4))
