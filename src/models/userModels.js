/* Este userModels, é o local onde trabalhamos com todas as inserções no banco de dados. */

//Conexão como o mongoDB atlas cloud
import mongoose from './mongoConnection.js';
//Criei um usuário User com o mesmo modelo do db
import User from './user.js';

//GETTER getAll -> busca por todos os usuários cadastrados em nosso banco de dados mongo.
//Implementação buscar todas as ocorrências no mongoDB utilizando a documentação, realizada com sucesso!
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
//Implementação do insert no mongoDB utilizando a documentação, realizada com sucesso!
const newUser = async (name, email, password) => {
  return User.create({ name: name, email: email, password: password })
    .then((result) => {
      console.log('Insert sucess');
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};
//Implementação de verificação através do email e retornando o id, feita com sucesso!
const userExists = async (id, email) => {
  if (id !== null) {
    //Ao utilizar o exists retorna o valor do id ou retorna null.
    return User.exists({ _id: id })
      .then((res_id) => {
        return res_id;
      })
      .catch((err) => {
        console.error(err);
      });
  } else if (email !== null) {
    //Ao utilizar o exists retorna o valor do id ou retorna null.
    return User.exists({ email: email })
      .then((res_id) => {
        return res_id;
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    return { erro: true, msg: 'Email ou Id incorretos.' };
  }
};
//Iniciando a implementação do deletando Uma ocorrência através do ID.
const deleteUser = async (id) => {
  return User.deleteOne({ _id: id })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateUser = async (id, email, password) => {};

export { getAllM, newUser, userExists, deleteUser, updateUser };
