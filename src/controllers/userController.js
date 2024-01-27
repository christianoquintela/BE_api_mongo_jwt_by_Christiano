//Importações
import {
  buscaUm,
  todos,
  criar,
  deletar,
  atualizar,
} from '../services/userService.js';

//Finalizado.
const getOne = async (req, res) => {
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
    
};
//Finalizado.
const getAll = async (req, res) => {
  // const listUsers =
  todos()
    .then((resp) => {
      return res.status(200).json({
        erro: false,
        msg: 'Acho que funfou! ',
        resp,
      });
    })

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
  
};
//Finalizado.
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

};

//Implementar agora 20 jan 2024 14:44.

/*
Call(in service) atualizar(id, name, email) -> verifica a existência call(in service exists) retorna: true continua,
false retorna: "user not found" -> call(in model updateUser) faz a query do mongo de update(usaremos o findByIdAndUpdate(id,update))
    */
const updateUser = async (req, res) => {
  const { name, email } = req.body;
  const id = req.params.id;
  atualizar(id, name, email)
    .then((result) => {
      if (result.erro === true) {
        res.status(404).json({
          erro: result.erro,
          msg: result.msg,
        });
      } else {
        res.status(200).json({
          msg: 'Atualizado com sucesso!',
          id: result._id,
          name: `Antes da atualização: ${result.name}`,
          email: `Antes da atualização: ${result.email}`,
        });
      }
    })
    
};

//Exportações
export { getOne, getAll, createUser, deleteUser, updateUser };
