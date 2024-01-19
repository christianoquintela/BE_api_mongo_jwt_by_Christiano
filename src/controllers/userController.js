import { todos, criar, deletar } from '../services/userService.js';
//Finalizado.
const getAll = (req, res) => {
  // const listUsers =
  todos()
    .then((resp) => {
      return res.status(200).json({
        erro: false,
        msg: 'Acho que funfou! ',
        resp,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
//Finalizado.
const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  criar(name, email, password)
    .then((result) => {
      if (result.cad === true) {
        return res.status(200).json({
          erro: false,
          msg: result.msg,
          id: result.id,
        });
      } else {
        return res.status(200).json({
          erro: false,
          name: result.name,
          email: result.email,
          id: result.id,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
//Inicializando a implementação.
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
