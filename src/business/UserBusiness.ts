import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  InvalidCPF,
  InvalidEmail,
  InvalidId,
  InvalidInfos,
  InvalidPhone,
} from "../error/CustomError";
import { User, UserDTO } from "../models/User";
import { GenerateId } from "../services/GenerateId";

const generateId = new GenerateId();
const userDatabase = new UserDatabase();

export class UserBusiness {
  public async signUp(user: UserDTO) {
    try {
      const { name, cpf, email, phone, gender, birth } = user;

      if (!name || !cpf || !email || !phone || !gender || !birth) {
        throw new InvalidInfos();
      }

      if (cpf.length !== 11) {
        throw new InvalidCPF();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id = generateId.generate();

      const newUser = new User(id, name, cpf, email, phone, gender, birth);

      await userDatabase.signUp(newUser);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public async getUsers() {
    try {
      const result = await userDatabase.getUsers();

      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public async updatePhone(id: string, phone: string) {
    try {
      if (!id) {
        throw new InvalidId();
      }

      if (!phone || phone.length > 14) {
        throw new InvalidPhone();
      }

      await userDatabase.updatePhone(id, phone);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public async delUser(id: string) {
    try {
      if (!id) {
        throw new InvalidId();
      }

      await userDatabase.delUser(id);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }
}
