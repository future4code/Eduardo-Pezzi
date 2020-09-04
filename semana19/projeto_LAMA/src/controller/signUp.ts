import {Request, Response} from 'express';
import {BaseDatabase} from '../data/BaseDB';
import {userBusiness} from '../business/userBusiness';

export const signup = async(req: Request, res: Response) =>{
    try {
        const {name, email, password} = req.body;
        const token = new userBusiness().signUp(name, email, password);

        res.status(200).send({message: 'Cadastro efetuado com sucesso!', token});
    } catch (error) {
        res.status(400).send({message: error.sqlMessage || error.message,});
    }
    await BaseDatabase.destroyConnection();
}