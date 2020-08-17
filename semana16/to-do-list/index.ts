import knex from 'knex';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

import { AddressInfo } from "net";

dotenv.config();
const app = express();
app.use(express.json());

const connection = knex ({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor executando em: http://localhost:${address.port}`);
    } else {
      console.error(`Falha na inicialização do servidor.`);
    }
  });


// Função para Gerar ID Aleatório p/usuários, com 4 caracteres: <<<<<<<<<<<

function makeid(): string {
    let codigo = '';
    let possibilidades = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@0123456789";

    for (let i = 0; i < 4; i++)
        codigo += possibilidades.charAt(Math.floor(Math.random() * possibilidades.length));

    return codigo;
}

  // Criando as inserções na Table:

  const createUser = async (
      id = makeid(),
      name: string,
      nickname: string,
      email: string
  ): Promise<void> => {
      await connection
      .insert({
          id,
          name,
          nickname,
          email
      })
      . into('user')
  }

  // Função getUsersByID:

  const getUsersByID = async(id: string): Promise<any> => {
      const result = await connection.raw
      (`SELECT * FROM ToDoList WHERE id = '${id}'`)
      return result[0][0]
  }

  // Função do POST edit user:

  const editUserById = async(
      id: string, name: string, nickname: string, email: string): Promise<any> => {
      await connection.raw
      (`UPDATE ToDoList WHERE id =
      '${id}' SET name = '${name}' nickname = '${nickname}' email = '${email}'`)
  }

  // função criar task.

  const creatNewTask = async(
      id: string,
      title: string,
      description: string,
      limitDate: string,
      creatorUserId: string
  ): Promise<any> => {
      await connection.raw
      (`INSERT INTO ToDoList VALUES(
          '${id}', '${title}', '${description}', '${limitDate}', '${creatorUserId}')`)
  }

  // Função pegar tarefa pelo ID:

  const getTaskById = async(id: string): Promise<any> => {
    const result = await connection.raw
    (`SELECT * FROM ToDoList WHERE id = '${id}'`)
    return result[0][0]
  }


  // Criando endpoints:

  app.put('/user', async(req: Request , res: Response) => {
    try {

        await createUser(
            req.body.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        );

        res.status(200).send();
    } catch (error) {
        res.status(400).send({message:error.message});
    }
  })


app.get('/user/:id' , async(req: Request , res: Response) => {
    try {
        const id = req.params.id;
        const user = getUsersByID(id);
        res.status(200).send(user);
    } catch (error) {
        const message = 'Error ao localizar usuário, verifique o ID digitado.'
        res.status(400).send({message});
    }
})

app.post('/user/edit/:id' , async(req: Request , res: Response) => {
    try {
        const id = req.params.id;
        const name = req.params.name;
        const nickname = req.params.nickname;
        const email = req.params.email;
        if (!id){
            const message = 'É necessário fornecer um ID'
            res.status(400).send(message);
            console.log('É necessário fornecer um ID')
        } else{
            res.status(200)
            editUserById(id, name, nickname, email);
        }
    } catch (error) {
        console.log('verifique o ID digitado') 
    }
})

// endpoint para criação de tarefas:

app.put('/task' , async(req: Request , res: Response) => {
    try {
        await creatNewTask(
            req.body.id,
            req.body.title,
            req.body.description,
            req.body.limitDate,
            req.body.creatorUserId
        )
            const message = 'Tarefa criada com sucesso'
        res.status(200).send(message);
    } catch (error) {
        const message = 'Erro ao criar tarefa, tente novamente';
        res.status(400).send(message);
    }
})

app.get('/task/:id' , async(req: Request , res: Response) =>{
    try {
        const id = req.params.id;
        const task = getTaskById(id);

        res.status(200).send(task);
    } catch (error) {
        const message = 'Erro ao obter tarefa, verifique o ID digitado'
        res.status(400).send(message)
    }
})