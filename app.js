require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());
app.use("/api/users", userRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Shgjervidor ativo na PORTA :", process.env.APP_PORT);
});

//Aqui
// Confirma alteração abrir conf, tira #, salva
// git push
// vai abrir auth e dar pau. Quando fechar ele faz

// La
// nom stop   ou     pm2 stop app
// git pull origin teste
// npm start   ou    pm2 start app
