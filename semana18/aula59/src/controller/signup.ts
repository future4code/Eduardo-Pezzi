import {Request, Response} from 'express';
import IdGenerator from '../services/IdGenerator';
import {Authenticator} from '../services/Authenticator';
import UserDatabase from '../data/UserDatabase';
import {HashManager} from '../services/HashManager';

export default async function signup(req: Request, res: Response){
    try {
        const {name, email, password, role} = req.body
        const id = IdGenerator.execute();

        if(!name || !email || !password || !role){
            res.status(400).send({message: 'Todos os campos são de preenchimento obrigatório.'})
        } else {
            const encryptedPassword = await new HashManager().hash(password);
            await new UserDatabase().createUser(id, name, email, encryptedPassword, role)
            const token = Authenticator.generateToken({id});
            res.status(200).send({message: 'Usuário criado com sucesso', token})
        }
    } catch (error) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
}