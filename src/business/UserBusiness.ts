import {
  CustomError,
  InvalidCPF,
  InvalidEmail,
  InvalidGender,
  InvalidId,
  InvalidInfos,
  InvalidPhone,
} from "../error/CustomError";
import { GenderOpt, User, UserDTO } from "../models/User";
import { GenerateId } from "../services/GenerateId";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
  constructor(
    private userDatabase: UserRepository,
    private generateId: GenerateId
  ) {}

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

      const genderUpper = gender.toUpperCase();

      if ( genderUpper !== GenderOpt.FEMININO && genderUpper !== GenderOpt.MASCULINO && genderUpper !== GenderOpt.PREFN) {
        throw new InvalidGender();
      }

      const id = this.generateId.generate();

      const newUser = new User(id, name, cpf, email, phone, gender, birth);

      await this.userDatabase.signUp(newUser);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public async getUsers() {
    try {
      const result = await this.userDatabase.getUsers();

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

      await this.userDatabase.updatePhone(id, phone);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public async delUser(id: string) {
    try {
      if (!id) {
        throw new InvalidId();
      }

      await this.userDatabase.delUser(id);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }
}
