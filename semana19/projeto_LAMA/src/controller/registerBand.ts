import { Request, Response } from 'express';
import IdGenerator from '../services/idGenerator';
import {Authenticator} from '../services/Authenticator'
import { UserDB } from '../data/UserDB';
import { BandDB } from '../data/BandDB'

export default async function registerBand(req: Request, res:Response){
    try {
        const token = req.headers.authorization as string;
        const idUser = new Authenticator().getTokenData(token).id;
        const bandName = req.body.bandName;
        const musicGenre = req.body.musicGenre;
        const responsible = req.body.responsible;

        const userData = await new UserDB().getUserById(idUser)
        const role = userData.role;

        const id = IdGenerator.execute();

        if(role !== "ADMIN"){
            res.status(400).send({message: "Not Allowed"})
        }

        if(!bandName || !musicGenre || responsible){
            res.status(400).send({message: 'Todos os dados de cadastro são necessários'})
        }

        await new BandDB().registerBand(id, bandName, musicGenre, responsible);
        res.status(200).send({message: "Banda criada com sucesso!"})
        
    } catch (error) {
        res.status(400).send({message: error.sqlMessage || error.message});
    }
}