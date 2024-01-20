//Importações
import {
  getById,
  getAllM,
  newUser,
  userExists,
  deleteUser,
  updateUser,
} from '../models/userModels.js';

//Buscando um cadastro pelo ID, //Finalizado.
const buscaUm = async (id) => {
  const email = null;
  return userExists(id, email)
    .then((result) => {
      if (result === null) {
        return {
          erro: true,
          msg: 'User not found.',
        };
      } else {
        return getById(id)
          .then((result) => {
            return result;
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
//Buscando todos os usuários no banco de dados. Finalizado.
const todos = async () => {
  return getAllM()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
//Criando usuários - Finalizado.
const criar = async (name, email, password) => {
  const id = null;
  return userExists(id, email)
    .then((result) => {
      try {
        if (result !== null)
          return { cad: true, msg: 'Usuário já cadastrado', id: result._id };

        return newUser(name, email, password)
          .then((result) => {
            return {
              cad: false,
              name: result.name,
              email: result.email,
              id: result._id,
            };
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
/* 
Implementação do delete conforme documentação mongoose realizada com sucesso!, Finalizado.
*/
const deletar = async (id, email) => {
  return userExists(id, email)
    .then((result) => {
      if (result === null) {
        return {
          erro: true,
          msg: 'User not found.',
        };
      } else {
        return deleteUser(id)
          .then((result) => {
            return {
              erro: false,
              msg: result,
            };
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
//Implementar atualizar
/*
Verifica a existência call(in service exists) retorna: true continua,
false retorna: "user not found"; else -> call(in model updateUser) faz a query do mongo de update(usaremos o findByIdAndUpdate(id,update))
    */
const atualizar = async (id, name, email) => {
  return userExists(id, email)
    .then((result) => {
      if (result === null) {
        return { erro: true, msg: 'User not found.' };
      } else {
        return updateUser(id, name, email)
          .then((result) => {
            return result;
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};

//Exportações
export { buscaUm, todos, criar, deletar, atualizar };
