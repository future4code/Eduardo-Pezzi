import { BaseDatabase } from "./BaseDatabase";


export default class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "User_Arq";

  public async createUser(id:string, name:string, email:string, password:string, role:string){
    await this.getConnection()
    .insert({id, name, email, password, role})
    .into(UserDatabase.TABLE_NAME);

    await UserDatabase.destroyConnection()
  }
}
