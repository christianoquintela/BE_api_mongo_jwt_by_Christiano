import app from './app.js';
import { configDotenv } from 'dotenv';
configDotenv();

app.listen(process.env.port, () => {
  const data = new Date();
  console.log(
    'Servidor iniciado em http:localhost:' + process.env.port + '\n' + data
  );
});
