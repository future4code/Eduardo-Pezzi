import * as jwt from "jsonwebtoken";

export  class Authenticator {
  static generateToken(input: AuthenticationData){
    return jwt.sign(
        input,
        process.env.JWT_KEY as string,
        {expiresIn: process.env.JWT_EXPIRES_IN}
    )
}

  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role
    };
    return result;
  }
}

interface AuthenticationData {
  id: string;
  role?: string;
}