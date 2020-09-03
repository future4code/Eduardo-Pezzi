import * as jwt from 'jsonwebtoken';

interface AuthenticationData {
    id: string;
}

export abstract class Authenticator{
    public static generateToken(input: AuthenticationData): string{
        return jwt.sign(
            input,
            process.env.JWT_KEY as string,
            {expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN}
        )
    }

     public static getTokenData(token: string): any{
        return jwt.verify(
            token,
            process.env.JWT_KEY as string 
        )
     }
}