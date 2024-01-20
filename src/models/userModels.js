/* Este userModels, é o local onde trabalhamos com todas as inserções no banco de dados. */

//Conexão como o mongoDB atlas cloud
import mongoose from './mongoConnection.js';
//Criei um usuário User com o mesmo modelo do db
import User from './user.js';

//Busca um cadastro na base de dados utilizando o ID, terminada com sucesso!
const getById = async (id) => {
  //'-password' é uma option
  return User.findById(id, '-password')
    .exec()
    .then((result) => {
      return result;
    })
    .catch((err) => console.log(err));
};
//GETTER getAll -> busca por todos os usuários cadastrados em nosso banco de dados mongo.
//Implementação buscar todas as ocorrências no mongoDB utilizando a documentação, finalizada com sucesso!
/* 
Estudando como retornar um objeto de um callback's, promises e async/await e pra retornar o obj.
Link sobre: https://www.youtube.com/watch?v=7Bs4-rqbCQc&ab_channel=DevPleno
Faz a busca no mongo usando O "Model: User" e o método find;
Usa-se o then, cria-se a função para trabalhar com as modificações necessárias;
e retorna o obj antes de fazer o catch para mostrar se houve erro.
caso queira pode fazer o uso de try/catch para mais robustez.
Tenta fazer um material de consulta para esse monte de dúvidas que esta tendo.
Fica ai Dois exemplos de uso:
*/
const getAllM = async () => {
  return User.find({})
    .then((result) => {
      const lista = result.map((list) => ({
        id: list._id,
        name: list.name,
        email: list.email,
      }));
      return lista;
    })
    .catch((err) => {
      console.log(err);
    });
};
//Implementação do insert no mongoDB utilizando a documentação, realizada com sucesso!
const newUser = async (name, email, password) => {
  return User.create({ name: name, email: email, password: password })
    .then((result) => {
      console.log('Insert success');
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};
//Implementação de verificação através do email e retornando o id, feita com sucesso!
const userExists = async (id, email) => {
  if ((id !== null && email !== null) || id !== null) {
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
//Iniciando a implementação do deletando Uma ocorrência através do ID, concluído com sucesso!
const deleteUser = async (id) => {
  return User.deleteOne({ _id: id })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};
//Implementar o update, finalizado com sucesso!
/*
Call(in model updateUser) faz a query do mongo de update(usaremos o findByIdAndUpdate(id,update))
*/
const updateUser = async (id, name, email) => {
  return User.findByIdAndUpdate(id, { $set: { name: name, email: email } })
    .then((result) => {
      return result;
    })
    .catch((err) => console.log(err));
};

//Exportações
export { getById, getAllM, newUser, userExists, deleteUser, updateUser };
