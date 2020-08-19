import { Request, Response } from "express";
//import { connection } from '../services/connection';
import { userTableName, connection } from '../index';
import IdGenerator from '../services/idGenerator';
import Authenticator from "../services/Authenticator";

export default async function signup(req: Request, res: Response) {
    try {
        const { name, nickname, email, password } = req.body
        const id = IdGenerator.execute()

        if (!name || !nickname || !email || !password) {
            res
                .status(400)
                .send({
                    message: "\"name\",\"nickname\" e \"email\" são obrigatórios"
                })
        }

        await connection
            .insert({ id, name, nickname, email, password })
            .into(userTableName)

            const token = Authenticator.generateToken({id})
        res
            .status(200)
            .send({message: "Usuário criado com sucesso",
            token});
    } catch (error) {
        res
            .status(400)
            .send({message: error.sqlMessage || error.message});
    }
}   


