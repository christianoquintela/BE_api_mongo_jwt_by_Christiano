import { todos, criar, deletar } from '../services/userService.js';

const getAll = (req, res) => {
  todos();

  return res.status(200).json({
    erro: false,
    msg: 'Lista de todos os usuários cadastrados no MongoDB.',
  });
};

const createUser = (req, res) => {
  const { email, password } = req.body;

  const user = criar(email, password);

  return res.status(200).json({
    erro: false,
    msg: 'usuário criado com sucesso.',
    id: user._id,
    email: user.email,
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  // console.log('userControler id:' + id);
  const idDeletado = deletar(id);
  return res.status(200).json({
    erro: false,
    msg: `Deletado com sucesso o _id:${idDeletado}.`,
  });
};

export { getAll, createUser, deleteUser };
