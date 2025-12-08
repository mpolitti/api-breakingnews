const express = require("express");
const userRoute = require("./src/routes/user.route");

const app = express();

app.use("/soma", userRoute);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})