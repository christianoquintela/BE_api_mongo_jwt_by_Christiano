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
  deleteAllUsers,
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
routes.get('/user/:id',getOne);
//Insert um user ao banco de dados.
routes.post('/user', createUser);
//Implementando o deleteOne
routes.delete('/user/:id', deleteUser);
//implementar o delete all
routes.delete('/user', deleteAllUsers)

export default routes;
