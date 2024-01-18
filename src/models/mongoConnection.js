//Quando estiver dominando o assunto, prefira usar nomes ao invés de index, é melhor.
//Dotenv
import { configDotenv } from 'dotenv';
configDotenv();
//Mongoose
import mongoose from 'mongoose';
//Mongoose connection
mongoose.connect(
  `mongodb+srv://christiano_quintela:${process.env.pass_mongoose}@cluster0.rp5lmbr.mongodb.net/?retryWrites=true&w=majority`
).then(() => {
  console.log('Conectou ao banco com sucesso!');
})
.catch((err) => console.log(err));

//Export default
export default mongoose;
