//Conexão como o mongoDB atlas cloud
import { mongoose } from 'mongoose';
//Criei um usuário User com o mesmo modelo do db
const User = mongoose.model('User', {
  id: String,
  name: String,
  email: String,
  password: String,
});

export default User;
