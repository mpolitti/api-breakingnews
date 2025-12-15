import express from 'express';
import connectDatabase from './src/database/database.js'; 
import userRoute from './src/routes/user.route.js';
import dotenv from 'dotenv';

dotenv.config();

//A porta será recuperado do servidor que for instalado o webservice. Se não houver utiliza a 3000. Não pega do .env. local.
const port = process.env.PORT || 3000;

const app = express();

try {
  
  connectDatabase();

  app.use(express.json());
  app.use("/user", userRoute);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

} catch (err) {
  res.status(500).send({ message: err.message });
};