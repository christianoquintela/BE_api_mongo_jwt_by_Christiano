/* Este userModels, é o local onde trabalhamos com todas as inserções no banco de dados. */

//Conexão como o mongoDB atlas cloud
import mongoose from './mongoConnection.js';
import jwt from 'jsonwebtoken';
//Criei um usuário User com o mesmo modelo do db
import User from './user.js';
import { connection } from 'mongoose';

//Busca um cadastro na base de dados utilizando o ID, terminada com sucesso!
const getById = async (id) => {
  //'-password' é uma option
  return User.findById(id, '-password')
    .exec()
    .then((result) => {
      return result;
    })
    
};
/* 
GETTER getAll -> busca por todos os usuários cadastrados em nosso banco de dados mongo.
Implementação buscar todas as ocorrências no mongoDB utilizando a documentação, finalizada com sucesso!
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

};
//Implementação do insert no mongoDB utilizando a documentação, realizada com sucesso!
const newUser = async (name, email, password) => {
  return User.create({ name: name, email: email, password: password })
    .then((result) => {
      console.log('Insert success');
      return result;
    })

};

//Implementação de verificação através do email e retornando o id, feita com sucesso!
const userExists = async (id, email) => {
  if ((id !== null && email !== null) || id !== null) {
    //Ao utilizar o exists retorna o valor do id ou retorna null.
    return User.exists({ _id: id })
      .then((res_id) => {
        return res_id;
      })
      
  } else if (email !== null) {
    //Ao utilizar o exists retorna o valor do id ou retorna null.
    return User.exists({ email: email })
      .then((res_id) => {
        return res_id;
      })
      
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
/*
Implementar o update, finalizado com sucesso!
Call(in model updateUser) faz a query do mongo de update(usaremos o findByIdAndUpdate(id,update))
*/
const updateUser = async (id, name, email) => {
  return User.findByIdAndUpdate(id, { $set: { name: name, email: email } })
    .then((result) => {
      return result;
    })
    
};

/*
A função requestLogin é responsável por criar a autorização, depois de buscar no DB
a confirmação da existência do usuário, então utilizamos ali no else o JWT.SIGN para
criar o token, composto de header, payload e signature.
*/

const requestLogin = async (req, res) => {
  const { email, password } = req.body;

  login(email, password)
    .then((result) => {
      if (result === null) {
        res.status(400).json({ erro: true, result });
      } else {
        const id = result._id;
        const newToken = jwt.sign(
          /*
Header:
O header especifica se o token será assinado, e caso seja qual o algoritmo usado para a assinatura usando a
  declaração obrigatória alg (algoritmo). Além disso pode conter as declarações opcionais typ (tipo de mídia)
  e cty (tipo de conteúdo).
*/
          {
            alg: 'HS256',
            typ: 'JWT',
          },
          /*
          Payload:
          O payload pode conter qualquer tipo de dado relevante para a aplicação, não existem declarações obrigatórias.
          */
          {
            userId: id,
            email: email,
          },
          //Secret que neste caso esta salvo em arquivo .env
          process.env.secret,
          //Options
          { expiresIn: 43200 }
          /*
          A assinatura consiste da codificação e encriptação do header, payload e um segredo. Esse campo é usado para
           provar a autenticidade de um token, prevenindo que ele possa ser modificado por um agente malicioso.
            As declarações registradas para a assinatura são:

            iss (issuer) quem criou o token;
            sub (subject) sobre quem o token se refere;
            aud (audience) para quem o token é esperado;
            exp (expiration) data de expiração;
            nbf (not before) a partir de quando o token é valido;
            iat (issued at) data de criação;
            jti (jwt id) identificador único;
            A assinatura é verificada pela aplicação que deseja validar a autenticidade do token.
            Se o token for assinado com criptografia assimétrica, a chave pública pode ser 
            obtida através de uma API que fornece tal chave no formato de uma JWK.
          */
        );
        res.status(200).json({ erro: false, token: newToken });
      }
    })
    
};

/* 
A função login é para verificar(autenticar) se existe um cadastro de 
usuário cujos valores de email(ou nome de usuário no futuro) e password existem 
no banco dados, assim fazemos a consulta e será retornado true or false.
*/
const login = async (email, password) => {
  return User.findOne({ email, password })
    .exec()
    .then((result) => {
      return result;
    })
    
};
//Exportações
export {
  getById,
  getAllM,
  newUser,
  userExists,
  deleteUser,
  updateUser,
  requestLogin,
};
