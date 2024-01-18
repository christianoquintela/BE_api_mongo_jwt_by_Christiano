/* Este userModels, é o local onde trabalhamos com todas as inserções no banco de dados. */

//Conexão como o mongoDB atlas cloud
import mongoose from './mongoConnection.js';
//Criei um usuário User com o mesmo modelo do db
import User from './user.js';

//GETTER getAll -> busca por todos os usuários cadastrados em nosso banco de dados mongo.
const getAllM = async () => {
  //Iniciando a conexão com o mongoDB
  const usuarios = await User.find({});
  console.log(usuarios);
};

const newUser = async ({ email, password }) => {};

const userExists = async (email, id) => {};

const deleteUser = async (id) => {};

const updateUser = async (id, email, password) => {};

export { getAllM, newUser, userExists, deleteUser, updateUser };
