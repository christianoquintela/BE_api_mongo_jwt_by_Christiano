import {
  getAllM,
  newUser,
  userExists,
  deleteUser,
} from '../models/userModels.js';

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
  return userExists(email)
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
const deletar = (id) => {
  const email = null;
  const usuario = userExists(email, id);
  console.log(usuario);

  if (!usuario) {
    return {
      erro: true,
      msg: 'User not found.',
    };
  }
  // console.log('Service delete, id: ' + id);
  const deletedId = deleteUser(id);
  return deletedId;
};

export { todos, criar, deletar };
