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

routes.get('/', (req, res) => {
  res.status(200).json({
    error: false,
    msg: 'Bem vindo a routes no endpoint /',
  });
});
//Get todos os usuários cadastrados no banco de dados mongoDB Atlas.
routes.get('/user', getAll);
//Implementar o buscar por um usuário específico.
routes.get('/user/:id', getOne);
//Insert as createUser.
routes.post('/user', createUser);
//Delete as deleteOne
routes.delete('/user/:id', deleteUser);
//Put as updateUser
routes.put('/user/:id', updateUser);

export default routes;
