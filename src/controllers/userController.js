import { buscaUm, todos, criar, deletar } from '../services/userService.js';
//Implementar...
const getOne = (req, res) => {
  const id = req.params.id;
  buscaUm(id)
    .then((result) => {
      if (result.erro === true) {
        //Res se o id não foi encontrado
        res.status(404).json({
          erro: true,
          msg: result.msg,
        });
      } else {
        //Res de sucesso!
        res.status(200).json({
          erro: false,
          msg: result,
        });
      }
    })
    .catch((err) => console.log(err));
};
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
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const email = null;
  deletar(id, email)
    .then((result) => {
      if (result.erro === true) {
        //Res se o id não foi encontrado
        res.status(404).json({
          erro: true,
          msg: result.msg,
        });
      }
      if (result.erro === false) {
        //Res de sucesso!
        res.status(200).json({
          erro: false,
          msg: 'Mensagem abaixo é o retorno que o mongo mostra ao deletar um cadastro.',
          confirmDelete: result.msg,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
//implementar... Don't Keep calm, Run away, it is a Danger zone!
const deleteAllUsers = (req, res) => {};

export { getOne, getAll, createUser, deleteUser, deleteAllUsers };
