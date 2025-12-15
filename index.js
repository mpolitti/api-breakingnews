import express from 'express';
import connectDatabase from './src/database/db.js'; 
import userRoute from './src/routes/user.route.js';

const port = 3000;
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