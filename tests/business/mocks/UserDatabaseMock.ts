import { UserRepository } from "../../../src/business/UserRepository";
import { User } from "../../../src/models/User";

export class UserDatabaseMock implements UserRepository {
  public async signUp(user: User): Promise<void> {}

  public async getUsers(): Promise<[]> {
    return []
  }

  public async updatePhone(id: string, phone: string): Promise<any> {}

  public async delUser(id: string): Promise<any> {}
}
