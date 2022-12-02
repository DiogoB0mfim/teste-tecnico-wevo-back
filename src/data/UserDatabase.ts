import { User } from "../models/User";
import BaseDatabase from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public async signUp(user: User) {
    await BaseDatabase.connection("Wevo_users").insert({
      id: user.getId(),
      name: user.getName(),
      cpf: user.getCpf(),
      email: user.getEmail(),
      phone: user.getPhone(),
      gender: user.getGender(),
      birth: user.getBirth(),
    });
  }

  public async getUsers() {
    const result = await BaseDatabase.connection.raw(`
      SELECT id, name, cpf, email, phone, gender, DATE_FORMAT(birth,'%d/%m/%Y') as birth_date
      FROM Wevo_users;
    `);

    return result[0];
  }

  public async updatePhone(id: string, phone: string) {
    await BaseDatabase.connection("Wevo_users")
    .where({ id })
    .update({
      phone: phone
    });
  }

  public async delUser(id: string) {
    await BaseDatabase.connection("Wevo_users")
    .where({ id })
    .del() 
  }
}
