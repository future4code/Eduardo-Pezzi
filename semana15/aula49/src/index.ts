/* Exercício 1:

    Resposta A: Sim é possível imprimir a senha, pois o user está no mesmo escopo.
    Resposta B: Foi impressa uma única vez.

    Exercício 2:

    Resposta A: Somente 1 chamada.
    Resposta B: 2 chamadas - 2 usuários trouxeram informação da classe User, 1 usuário e 1 customer.

    Exercício 3:

    Resposta A: Não, o Password é Private que só permite acesso no mesmo escopo.
*/


// Início ID aleatório com 6 caracteres.
function makeid(): string {
    let codigo = '';
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@0123456789_";
  
    for (let i = 0; i < 6; i++)
      codigo += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return codigo;
}
// fim.

import moment from 'moment'
import  {User}  from './user';
import {Customer} from './customer';
import {Employee} from './employees';
import {Seller} from './seller';

const eduardo: User = new User(makeid(), 'edupezz@test.com', 'Eduardo', '123' )
const pedro: Customer = new Customer(makeid(), 'pedro@timeStamp.com', 'Pedro', '123', 'Visa' )


console.log(eduardo)
console.log(pedro)

    //Exercício 4 e 5
    console.log(pedro.introduceYourself())
    // fim exercício 4 e 5

// Exercício 6 e 7:
  const novoEmpregado: Employee = new Employee(makeid(), 'empregado@teste.com', 'Raul', '123', moment.now() , 4000);
  console.log(novoEmpregado);

  // 7
  console.log('Novo salário com benefícios:', + novoEmpregado.calculateTotalSalary());

  // Resposta A: Somente uma vez.
  // Resposta B: Todas as informações foram impressas.

// fim exercício 6 e 7

// Exercício 8:

    const mySeller: Seller = new Seller(makeid(), 'myseller@test.com', 'MySeller da Silva', '123', moment.now(), 4000)
    /*
    console.log(mySeller.id);
    console.log(mySeller.email);
    console.log(mySeller.name);
    console.log(mySeller.password);
    console.log(mySeller.admissionDate);
    console.log(mySeller.baseSalary);

    Resposta A: Não é possível imprimir nenhum valor.
    */ 

    // Exercício 9:
    mySeller.setSalesQuantity(9)
    console.log(mySeller);

    // Exercício 10:

   console.log('O Salário com a comissão e benefícios será de: R$',+mySeller.calculateTotalSalary().toFixed(2));
