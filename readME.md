# Aprendendo mais coisas do universo DEV.

Projeto iniciado através de tutorial no youtube, contudo devido a algumas divergências
de entendimento e mudanças na syntax do mongoose, decidi refatorar e fazer as
mudanças de acordo com meu entendimento da documentação oficial Mongoose/MongoDB.
Qualquer erro de lógica, má implementação ou uso errado dos conceitos, fiquem a
vontade para sugerir alterações!!!
Vamos que vamos!

## npm init -y

**Altereções depois do package.json criado.**
{
"name": "backend*api_node_mongo_jwt",
*//aqui no version lê se da direita para a esquerda.\_
_//Zero mais a direita significa correção de bugs_
_//Zero do meio: significa novas implementações_
_//Primeiro digito a esquerda: significa atualizações drásticas._
"version": "1.0.0",
"description": "Mais uma api JWT",
"main": "server.js",
"type": "module", _//adicionar o que vai usar: require("common.js") ou import/export("module")._
"scripts": {
_//Esse script foi adicionado manualmente para a utilização do nodemon, que atualiza o servidor toda vez que faço alterações no código._
"start": "nodemon server.js",
"test": "echo \"Error: no test specified\" && exit 1"
_//Novo aprendizado: utilizando o script abaixo, agora é possível utilizar a variável de ambiente no javascript_
"dev":"js watch --env-file .env src/server.js"_//verificar se é aplicável ao contexto que estou trabalhando_
},
_//Palavras chaves que são usadas para encontrar esse código._
"keywords": [mongodb, JWT, nodejs],
"author": "Christiano Quintela programador christianoquintela@gmail.com",
"license": "ISC"
}

npm i express bcrypt jsonwebtoken --save | -S
npm i nodemon dotenv --save-dev -S -D

#### Explicação da estrutura de pastas:

**Routes:** rotas das requisições.

**Controllers:** Entradas e saídas das requisições http.

**Services:** Toda a lógica do servidor(checagens e validações antes de enviar para o model).

**Model:** Interação com o mongoDB(CRUD).

# Manim

## Tenha em mente ao fazer suas api's;

### Sequência para lidar com as requisições:

1. Camada para lidar com as req's: **(Transporte)** _(Controllers)_
2. Camada para lidar com a lógica: **(Service)** _(Services)_
3. Camada para lidar com persistência: **(Storage)** _(Models)_
   fluxo de exemplo;
   req -> express.handler() -> service.adicionarNomeAoUsuário -> storage.salvarUser()

- Legend
  FE -> Front-end.
  BE -> Back-end.

> MSC(model -> service -> controller)
> CSM(controller -> services -> models)

- Design patterns _MVC(model view controller)_

1. FE. envia a requisição para o BE.

2. chega no Controller; **(Transporte)**
3. Controller manda para o Services; **(Service)**
4. Services manda para o Models; **(Storage)**
5. Models devolve por Services;
6. Services manda para o Controller;
7. Controller manda de volta para o front; (Ufa!!!)

## Async/await - promise - callback

### try/catch - then/catch

- Utilizando os conhecimentos acima mostrados estou aprendendo e refatorando este projeto.
