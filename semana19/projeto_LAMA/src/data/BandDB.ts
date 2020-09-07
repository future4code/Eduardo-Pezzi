import { BaseDatabase } from './BaseDB';

export class BandDB extends BaseDatabase{
    static TABLE_NAME = 'LAMA_BANDAS';

    public async registerBand(
        id: string, name: string, genre: string, responsible: string): Promise<void>{
        await this.getConnection()
        .insert({id, name, genre, responsible})
        .into(BandDB.TABLE_NAME)
    }

    public async getBandById(id:string): Promise<any>{
        const result = await this.getConnection()
        .select('*')
        .from(BandDB.TABLE_NAME)
        .where({id})

        return result[0];
    }

    public async getBandByName(bandName: string): Promise<any>{
        const result = await this.getConnection().raw(`
        SELECT * FROM ${BandDB.TABLE_NAME} WHERE bandName = ${bandName} `)

        return result[0][0];
    }
}