import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

const userController = new UserController();

// Rota para criar usuário
userRouter.post("/create", userController.signUp);

// Rota para pegar todos os usuários
userRouter.get("/get-all", userController.getUsers);

// Rota para atualizar número de telefone do usuário
userRouter.put("/update-phone", userController.updatePhone);

// Rota para deletar o usuário
userRouter.delete("/delete/:id", userController.delUser);