//Import do JWT
import jwt from 'jsonwebtoken';
//Import do dotenv.
import { configDotenv } from 'dotenv';
configDotenv();

//Function middleware
function verifyToken(req, res, next) {
  // Pega o token que vem através do headers.authorization
  const token = req.headers.authorization;
  /* 
Utilizamos aqui a função de verificação já existente no Json web token para comparar
o token enviado para o usuário e o token existente no backend.
neste caso a minha chave secreta está salva no arquivo .env.
*/
  jwt.verify(token, process.env.secret, (err) => {
    /*
    verificamos que: se houver resposta de erro na função verify do jwt, então
    retornamos ao usuário que informou o token inválido, caso contrário, o middleware
    permite o acesso as rotas em que ele for utilizado.
    */
    if (err) {
      console.log('entrou no erro do middleware');
      return res.status(400).json({
        msg: 'Token invalid!',
      });
    }
    /*
  Como o if não foi executado enviando o erro ao usuário, o retorno "next()"
  permite que a requisição de continuidade.
  */
    return next();
  });
}

export default verifyToken;
