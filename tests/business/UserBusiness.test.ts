import { UserBusiness } from "../../src/business/UserBusiness";
import { CustomError } from "../../src/error/CustomError";
import { GenderOpt } from "../../src/models/User";
import { GenerateId } from "../../src/services/GenerateId";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

const generateId = new GenerateId();

const userBusiness = new UserBusiness(new UserDatabaseMock(), generateId);

describe("Testes em criar usuário", () => {
  test("Teste 1: Erro para CPF com menos de 11 dígitos", async () => {
    expect.assertions(2);

    try {
      const mock = {
        name: "Teste",
        cpf: "12345",
        email: "teste@gmail.com",
        phone: "21991896139",
        gender: GenderOpt.PREFN,
        birth: "1789/12/30",
      };

      await userBusiness.signUp(mock);
    } catch (error: any) {
      expect(error).toBeInstanceOf(CustomError);
      expect(error.message).toBe("Cpf inválido!");
    }
  });

  test("Teste 2: Erro para e-mail sem inválido", async () => {
    expect.assertions(2);

    try {
      const mock = {
        name: "Teste",
        cpf: "12345678911",
        email: "testegmail.c",
        phone: "21991896139",
        gender: GenderOpt.MASCULINO,
        birth: "2002/12/10",
      };

      await userBusiness.signUp(mock);
    } catch (error: any) {
      expect(error).toBeInstanceOf(CustomError);
      expect(error.message).toBe("E-mail inválido!");
    }
  });
});

describe("Testes em deletar usuário", () => {
  test("Teste 1: Erro para id vazio", async () => {
    expect.assertions(2);

    try {
     
      await userBusiness.delUser("");
    } catch (error: any) {
      expect(error).toBeInstanceOf(CustomError);
      expect(error.message).toBe("Id inválido!");
    }
  });
});

describe("Testes em atualizar número de telefone do usuário", () => {
  test("Teste 1: Erro para id vazio", async () => {
    expect.assertions(2);

    try {
     
      await userBusiness.updatePhone("","79991306139");
    } catch (error: any) {
      expect(error).toBeInstanceOf(CustomError);
      expect(error.message).toBe("Id inválido!");
    }
  });

  test("Teste 2: Erro para telefone com mais de 14 digitos", async () => {
    expect.assertions(2);

    try {
     
      await userBusiness.updatePhone("id","79991306139124567");
    } catch (error: any) {
      expect(error).toBeInstanceOf(CustomError);
      expect(error.message).toBe("Número de telefone inválido!");
    }
  });
});

