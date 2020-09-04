import {BaseDatabase} from './BaseDB';

export class UserDB extends BaseDatabase{
    
    private static TABLE_NAME: string = 'LAMA_USUARIOS';

    public async registerUser(
            id: string, name: string, email:string, password:string
        ): Promise<void>
            {
                await this.getConnection()
                .insert({id, name, email, password})
                .into(UserDB.TABLE_NAME);
            }
}