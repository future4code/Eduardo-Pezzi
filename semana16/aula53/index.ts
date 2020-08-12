import knex from 'knex';
import dotenv from 'dotenv';
import express, {Request, Response} from 'express';

import { AddressInfo } from "net";

dotenv.config();
const app = express();


const conection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
})

app.use(express.json());
/*
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor executando em: http://localhost:${address.port}`);
    } else {
      console.error(`Falha na inicialização do servidor.`);
    }
  });*/


  // Exercício 01: 
  
  const getActorByID = async(id: string): Promise<any> => {
      const result = await conection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'`)
        console.log(result[0][0])
        return result[0][0]  
  }

  const getAllActors = async(): Promise<any> => {
    const result = await conection.raw(`
      SELECT * FROM Actor`)
      console.log(result[0][0])
      return result[0][0]  
}
  // Teste do primeiro exercício (acima):
      //  const primeiro = getActorByID("001")
     //   console.log(primeiro);
  
  // Resposta A) Recebemos a resposta 'CRUA' do banco de dados, sem tratamento.

  // Resposta B) 
  /*
  const getActorByName = async(name: string): Promise<any> => {
      try {
        const result = await conection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"`)
        return result;
    } catch (error) {
        console.log(error);  
    }
  }

  const testeDois = async(name:string): Promise<any> => {
    const segundo = await (getActorByName('Juliana Paes'));
    console.log(segundo);
  }
  
  testeDois("Juliana Paes")
*/

  // Resposta C)

  /*
  const getActorByGender = async(gender: string): Promise<any> => {
      const result = await conection.raw(`
      SELECT COUNT(*) as total FROM Actor WHERE gender = '${gender}'`);
        const total = result[0][0].total
      return total
  };

  const testetres = async(gender:string): Promise<any> => {
    const terceiro = await (getActorByGender('female'));
    console.log(terceiro);
  }
  testetres('female');
*/

  // -------------- Query Builder abaixo
  
  // Exercício 2:
  /*
  const createActor = async (
      id: string,
      name: string,
      salary: number,
      dateOfBirth: string,
      gender: string
  ): Promise<void> => {
      await conection
      .insert({
          id,
          name,
          salary,
          birth_date: dateOfBirth,
          gender,
      })
      .into ('Actor');
  };

  const testeQuatro = createActor("006", "Eduardo Moscovis", 350000, '1977-04-04', "male");
  */

  /*
  const updateSalaryFromID = async(salary: number, id: string): Promise<any> => {
    await conection
    .update({
        salary: salary,
    })
    .where("id", id)
    .into('Actor');
  };

  const testeCinco = updateSalaryFromID(900000, "006");
  */

  /*
  const deleteActorFromID = async(id: string): Promise<any> => {
      await conection
      .delete()
      .where("id", id)
      .into('Actor');
  };

  const testeSeis = deleteActorFromID('004');
  */

  /*
 const genderAverage = async (gender: string): Promise<any> => {
    const result = await conection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };

  const testeGetAverage = async(gender:string): Promise<any> => {
    const illBeBack = await (genderAverage('female'));
    console.log('A média do genero é: R$', + illBeBack);
  }
  testeGetAverage('female');
  */

  // Exercício 3:

  app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorByID(id);
  
      res.status(200).send(actor)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  // Resposta A) Para que possamos receber a informação via params do front.
  // Resposta B) Ele enviam ao solicitante respostas referentes a sua requisição 200 para acerto e 400 para erro.

  app.get("/actor", async (req: Request, res: Response) =>{
      try {
          const actor = await getAllActors();

          res.status(200).send(actor)
      }catch (error) {
            res.status(400).send({
            message: error.message,
        });
    }
  });