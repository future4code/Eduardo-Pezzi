import {Authenticator} from '../services/Authenticator';
import {HashManager} from '../services/HashManager';
import {Response, Request} from 'express';
import {UserDB} from '../data/UserDB';
import IdGenerator from '../services/idGenerator';

export default async function login(req: Request, res: Response){
    try {
        const id =  IdGenerator.execute();
        const loginemail = req.body.email;
        const password = req.body.password;
        const userData = await new UserDB().login(loginemail);
        const userMail = userData.email;
        const userPassword = userData.password
        const role = userData.role
        const pwdCompared = await new HashManager().compare(password, userPassword);

        if(!loginemail || !password){
            res.status(400).send({message: 'É necessário informar todos os dados para login'})
        }

        if((loginemail !== userMail) || (pwdCompared !== true) === false){
            res.status(400).send({message: 'Email ou senha inválidos'})
        }

        const token = new Authenticator().generateToken({id, role})
        res.status(200).send({message: 'Bem vindo, login efetuado com sucesso!', token})

    } catch (error) {
        res.status(400).send({message: error.sqlMessage || error.message});
    }
}