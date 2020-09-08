import * as jwt from 'jsonwebtoken';

export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}

interface AuthenticationData {
    id: string,
    role: USER_ROLES
}

export class Authenticator{
    public  generateToken(input: AuthenticationData): string{
        return jwt.sign(
            input,
            process.env.JWT_KEY as string,
            {expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN}
        )
    }

     public getTokenData(token: string): any{
        return jwt.verify(
            token,
            process.env.JWT_KEY as string 
        )
     }
}