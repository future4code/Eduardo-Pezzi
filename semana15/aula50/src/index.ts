import { Client } from './client';
import{ Residence } from './residence';
import { Industry } from './industry';
import { Commerce } from './commerce';
import { ResidentialClients } from './residentialClient';
import {ClientManager} from './ClientManager';

const cliente1: Client = {
  name:  'Eduardo',
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  }
}
// Exercício 1:
// Resposta A: Foi possível imprimir todos os valores.
// Resposta B: Como o encapsulamento não foi definido tudo está public e pode ser acessado.
console.log(cliente1);
console.log(cliente1.calculateBill());

// Exercício 2:
  /*const placeTeste: Place = new Place('20120236');
  console.log(placeTeste);*/

  /* Resposta A: encontramos o seguinte erro ao tentar criar uma instância da classe abstrata:
    'Cannot create an instance of an abstract class.'
    Resposta B: Acredito que um método público, acessível por seus filhos conseguiria criar */

    // Exercício 3:

    const residencia1: Residence = new Residence(3, '20456789');
    console.log(residencia1.getCep());

    const comercio1: Commerce = new Commerce(6, '20910568');
    console.log(comercio1.getCep());

    const industria1: Industry = new Industry(18, '20921564');
    console.log(industria1.getCep());

    // Exercício 5:
    // Resposta A: temos como semelhança os itens name, consumedenergy, registrationnumber e cep
    // Resposta B: Como diferença temos os ítens únicos como CPF e CNPJ e o cálculo da conta.

    //Exercício 6:
    // Resposta A: Ela deve ser filha da classe Industry.
    // Resposta B: Ela deve implementar a classe Client.
    // Resposta C: Todos os outros dados nós já temos nas classes de clientes residencial e comercial.

      const clientManager = new ClientManager()

      const newCustomerR = new ResidentialClients('Eduardo', 456, 210, '14525678436', 2, '20914541')
      clientManager.registerClient(newCustomerR);