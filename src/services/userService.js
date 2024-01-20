import {
  getById,
  getAllM,
  newUser,
  userExists,
  deleteUser,
} from '../models/userModels.js';
//Buscando um cadastro pelo ID.
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
        // console.log('dentro do try catch: ' + result._id);
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

  // console.log(teste);

  // if (trueORfalse) return trueORfalse;
  //o inserir esta ok, agora é validar o check
  // const user = newUser(name, email, password);
  // console.log(user);
};

/* 
Iniciar a implementação do delete conforme documentação mongoose.
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

  // console.log('Service delete, id: ' + id);
  // const deletedId = deleteUser(id);
  // return;
};

export { buscaUm, todos, criar, deletar };
