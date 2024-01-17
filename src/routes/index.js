//Forma diferente de declarar o Router do express.
// import { Router } from 'express';
//const routes = new Router();
import express from 'express';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).json({
    error: false,
    msg: 'Bem vindo a routes no endpoint /',
  });
});
