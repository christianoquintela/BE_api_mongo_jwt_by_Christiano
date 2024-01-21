//Forma diferente de declarar o Router do express.
// import { Router } from 'express';
//const routes = new Router();
import express from 'express';
const routes = express.Router();

import {
  getOne,
  getAll,
  createUser,
  deleteUser,
  updateUser,
} from '../controllers/userController.js';
import { requestLogin } from '../models/userModels.js';
import veryfyToken from '../middlewares/authController.js';

routes.get('/', (req, res) => {
  res.status(200).json({
    error: false,
    msg: 'Bem vindo a routes no endpoint /',
  });
});
//Get todos os usuários cadastrados no banco de dados mongoDB Atlas.
routes.get('/user', veryfyToken, getAll);
//Implementar o buscar por um usuário específico.
routes.get('/user/:id', veryfyToken, getOne);
//Insert as createUser.
routes.post('/user', veryfyToken, createUser);
//Delete as deleteOne
routes.delete('/user/:id', veryfyToken, deleteUser);
//Put as updateUser
routes.put('/user/:id', veryfyToken, updateUser);
/*
Iniciando a implementação do uso de JWT - finalizado em: 20 jan 2024 as 20:26hrs. 
*/
routes.get('/login', requestLogin);

export default routes;
