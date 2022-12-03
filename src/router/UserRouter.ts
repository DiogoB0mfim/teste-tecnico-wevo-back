import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../data/UserDatabase";
import { GenerateId } from "../services/GenerateId";

export const userRouter = express.Router();

const generateId = new GenerateId();

const userDatabase = new UserDatabase();
const userBusiness = new UserBusiness(userDatabase, generateId);
const userController = new UserController(userBusiness)

// Rota para criar usuário
userRouter.post("/create", (req, res) => userController.signUp(req, res));

// Rota para pegar todos os usuários
userRouter.get("/get-all", (req, res) => userController.getUsers(req, res));

// Rota para atualizar número de telefone do usuário
userRouter.put("/update-phone", (req, res) => userController.updatePhone(req, res));

// Rota para deletar o usuário
userRouter.delete("/delete/:id", (req, res) => userController.delUser(req, res));
