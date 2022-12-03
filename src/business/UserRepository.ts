import { User } from "../models/User";

export interface UserRepository {
  signUp(user: User): Promise<any>;

  getUsers(): Promise<[]> | undefined;

  updatePhone(id: string, phone: string): Promise<any>;

  delUser(id: string): Promise<any>;
}
