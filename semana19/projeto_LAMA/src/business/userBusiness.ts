import {IdGenerator} from '../services/idGenerator';
import {HashManager} from '../services/HashManager';
import Authenticator from '../services/Authenticator';
import  {UserDB}  from '../data/UserDB';

export class userBusiness {
    
    public async signUp(name: string, email: string, password: string): Promise<string>{
        
        if(!name || !email || !password){
            throw new Error('Todas as informações devem ser fornecidas')
        } else if(password.length < 6){
            throw new Error('A senha deve possuir no mínimo 6 caracteres')
        } else{
            const id = new IdGenerator().generateId() as string;
            const pwdHash = await new HashManager().hash(password);
            const registerNewUser = await new UserDB().registerUser(id, name, email, pwdHash)
            const token = Authenticator.generateToken({id})

            return token
        }
    } 
}