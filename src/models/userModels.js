/* Este userModels, é o local onde trabalhamos com todas as inserções no banco de dados. */

//Conexão como o mongoDB atlas cloud
import mongoose from './mongoConnection.js';
//Criei um usuário User com o mesmo modelo do db
import User from './user.js';

//GETTER getAll -> busca por todos os usuários cadastrados em nosso banco de dados mongo.
const getAllM = async () => {
  /* 
  Estudando como retornar um objeto de um async/await, promises e callback's, pra retornar o obj.
  Faz a busca no mongo usando o O Model: User e o método find;
  Usa-se o then, cria-se a função para trabalhar com as modificações necessárias;
  e retorna o obj antes de fazer o catch para mostrar se houve erro.
  caso queira pode fazer o uso de try/catch para mais robustez.
  Tenta fazer um material de consulta para esse monte de dúvidas que esta tendo.
  Fica ai Dois exemplos de uso:
  */
  return User.find({})
    .then((usuarios) => {
      const lista = usuarios.map((list) => ({
        id: list._id,
        name: list.name,
        email: list.email,
      }));
      // console.log(lista);
      return lista;
    })
    .catch((err) => {
      console.log(err);
    });

  /* 
    função correta, substitua caso a de cima de erro.!
      return User.find({})
    .then((usuarios) => {
      try {
        const lista = usuarios.map((list) => ({
          id: list._id,
          name: list.name,
          email: list.email,
        }));
        // console.log(lista);
        return lista;
      } catch (error) {
        console.log(error);
      }
    })
    .catch((err) => {
      console.log(err);
    });
    */
};

const newUser = async (name, email, password) => {
  return User.create({ name: name, email: email, password: password })
    .then((result) => {
      console.log('Insert sucess');
      // console.log('Resultado do sucesso ao crear novo usuario: ' + result);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

const userExists = async (email) => {
  return User.exists({ email: email })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.error(err);
    });
};

const deleteUser = async (id) => {};

const updateUser = async (id, email, password) => {};

export { getAllM, newUser, userExists, deleteUser, updateUser };
