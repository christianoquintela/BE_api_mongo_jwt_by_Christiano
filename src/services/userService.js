import {
  getAllM,
  newUser,
  userExists,
  deleteUser,
} from '../models/userModels.js';

//Buscando todos os usuários no banco de dados.
const todos = () => {
  getAllM();
  
};

//Criando usuários
const criar = (email, password ) => {
  const usuario = userExists( email );

  if (usuario) return usuario;

  const user = newUser(email, password );

  return user;
};

const deletar =  (id ) => {
  const email = null;
  const usuario = userExists(email,id);
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
