import {BaseDatabase} from './BaseDB';

export class UserDB extends BaseDatabase{
    static TABLE_NAME = 'LAMA_USUARIOS';

    public async getUserById(id: string): Promise<any>{
        const result = await this.getConnection().raw(
            `SELECT * FROM '${UserDB.TABLE_NAME}' WHERE id = ${id}`
        )
        return result[0][0];
    }

    public async registerUser(id: string, name: string, email:string, password:string, role: string): Promise<void>{
        await this.getConnection()
        .insert({id, name, email, password, role})
        .into(UserDB.TABLE_NAME)
    }

    public async login(email: string): Promise<any>{
        const result = await this.getConnection()
        .select('*')
        .from(UserDB.TABLE_NAME)
        .where({email})

        return result[0];
    }
}