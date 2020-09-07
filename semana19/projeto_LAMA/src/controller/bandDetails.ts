import {Request, Response} from 'express';
import {BandDB} from '../data/BandDB';

export default async function bandDetails(req: Request, res: Response){
    
    try {
        const bandName = req.body.bandName;
        const bandId = req.body.bandID;

        if(!bandName && bandId){
            
            const result = await new BandDB().getBandById(bandId)
            res.status(200).send(result);
        }

        if(bandName && !bandId){

            const result = await new BandDB().getBandByName(bandName)
            res.status(200).send(result)
        }

        if(!bandName || !bandId){
            res.status(400).send({message: "É necessário informar ID ou Nome da banda."})
        }
    } catch (error) {
        res.status(400).send({message: error.sqlMessage || error.message});
            
    }
}
