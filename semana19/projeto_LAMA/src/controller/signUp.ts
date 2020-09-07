import { Request, Response } from 'express';
import IdGenerator from '../services/idGenerator';
import {Authenticator} from '../services/Authenticator';
import {UserDB} from '../data/UserDB'
import { HashManager } from '../services/HashManager';

export default async function signUp(req: Request , res: Response){
    try {
        const { name, email, password, role } = req.body
        const id =  IdGenerator.execute();

        if(!name || !email || !password || !role){
            res.status(400).send({
                message: "Todos os campos são obrigatórios"})
        }
         
        if(password.length < 6){
            res.status(400).send({
                message: "A senha precisa ter no mínimo 6 caracteres"
            })
        } 

        const encryptedPassword = await new HashManager().hash(password)
        await new UserDB().registerUser(id, name, email, encryptedPassword, role);
        const token = new Authenticator().generateToken({id, role})
        res.status(200).send({message: 'Usuário criado com sucesso', token})

    } catch (error) {
        res.status(400).send({message: error.sqlMessage || error.message});
    }
}