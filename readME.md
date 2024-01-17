# Aprendendo mais coisas do universo DEV.

{
"name": "backend_api_node_mongo_jwt",
//aqui no version lê se da direita para a esquerda.
//Zero mais a direita significa correção de bugs
//Zero do meio: siginifica novas implementações
//Primeiro digito a esquerda: significa atualizações drásticas.
"version": "1.0.0",
"description": "Mais uma api JWT",
"main": "server.js",
"type": "module", //adicionar o que vai usar
"scripts": {
"start": "nodemon server.js",
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [mongodb, JWT, nodejs],
"author": "Christiano Quintela programador christianoquintela@gmail.com",
"license": "ISC"
}

npm i express bcrypt jsonwebtoken --save | -S
npm i nodemon dotenv --save-dev -S -D

Explicação da estrutura de pastas:
Controllers: Entradas e saídas das requisições http

Model: interação com o mongoDB

Routes: rotas das requisições

Services: Toda a lógica do servidor(checagem antes de salvar no servidor).

# manim

( # Tenha em mente ao fazer suas api's;

## Sequência para lidar com as requisições:

1. Camada para lidar com as req's **(transporte)**
2. Camada para lidar com a lógica **(service)**
3. Camada para lidar com persistência **(storage)**
   fluxo de exemplo;
   req -> express.handler() -> service.adicionarNomeAoUsuario -> storage.salvarUser()
   )

> MSC(controller -> services -> models)

- Legend
  FE -> Front-end.
  BE -> Back-end.

- Design patterns _MSC(model service controller)_

1. FE. envia a requisição para o BE.

2. chega no Controller; **(Transporte)**
3. Controller manda para o Services; **(Service)**
4. Services manda para o Models; **(Storage)**
5. Models devolve por Services;
6. Services manda para o Controller;
7. Controller manda de volta para o front; (Ufa!!!)
