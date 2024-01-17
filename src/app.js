import express from 'express';
import routes from './routes/index.js';

class App{
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }
    routes(){
        this.server.use(routes);
    }
}
//Mais aprendizado:
/* 
Criou-se uma class para exportar server, middlewares e routes.
Que doidera!
 */

//Como foi usando class tem que instanciar chamando o construtor e dando um new.
//Entenda que ao dar App().server, vc utilizou o server do construtor.
//Muito daora!
export default new App().server;