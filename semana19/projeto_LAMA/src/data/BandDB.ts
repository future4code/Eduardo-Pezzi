import { BaseDatabase } from './BaseDB';

export class BandDB extends BaseDatabase{
    static TABLE_NAME = 'LAMA_BANDAS';

    public async registerBand(id: string, name: string, genre: string, responsible: string){
        await this.getConnection()
        .insert({id, name, genre, responsible})
        .into(BandDB.TABLE_NAME)
    }
}