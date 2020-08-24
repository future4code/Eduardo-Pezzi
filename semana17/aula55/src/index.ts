import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import knex from 'knex';
import {IdMaker} from './services/idmaker';
import {UserDatabase} from './data/userdatabase';
import {Authenticator} from './services/tokenMaker';

dotenv.config();

const app = express();

app.use(express.json());

const userTableName = "User";

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in ${process.env.DB_HOST}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

//criando usuário via query
const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};

// criando endpoints <<<<<<<<


//endpoint signup
app.post("/signup", async (req: Request, res: Response) => {
  try {
    
    // validação de email necessita ter @
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Verifique o email digitado");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Verifique a senha digitada");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const idmaker = new IdMaker();
    const id = idmaker.generate();

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, userData.password);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id,
    });

    res.status(200).send({
      token,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

app.post("/login", async (req: Request, res: Response) => {
  try {
    // validação de email necessita ter @
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("E-mail inválido");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    if (user.password !== userData.password) {
      throw new Error("Senha Inválida");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
    });

    res.status(200).send({token,});
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// pegando usuário pelo ID
app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});