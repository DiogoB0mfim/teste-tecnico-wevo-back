import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDTO } from "../models/User";

export class UserController {
  constructor(
    private userBusiness: UserBusiness
    ) {}

  public async signUp(req: Request, res: Response) {
    try {
      const { name, cpf, email, phone, gender, birth } = req.body;

      const newUser: UserDTO = {
        name,
        cpf,
        email,
        phone,
        gender,
        birth,
      };

      await this.userBusiness.signUp(newUser);
      res.status(200).send({ data: "Usuário criado com sucesso!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public async getUsers(req: Request, res: Response) {
    try {
      const result = await this.userBusiness.getUsers();

      res.status(200).send({ data: result });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public async updatePhone(req: Request, res: Response) {
    try {
      const { id, phone } = req.body;

      await this.userBusiness.updatePhone(id, phone);

      res.status(200).send({ data: "Número de telefone atualizado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public async delUser(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await this.userBusiness.delUser(id);

      res.status(200).send({ data: "Usuário deletado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
