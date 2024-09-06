const express = require("express");
const UsuariosControllers = require("./dominios/usuarios/UsuariosControllers");

const app = express();

app.use(express.json()); // middleware => interceptador

const usuariosControllers = new UsuariosControllers();

// var usuarios = [
//   {
//     id: 1,
//     nome: "Aurora",
//     sobrenome: "Lobo",
//     email: "aurora@email.com.br",
//     senha: "aurora",
//     createdAt: "2024-08-20",
//   },
//   {
//     id: 2,
//     nome: "Amora",
//     sobrenome: "lence",
//     email: "amora@lab.com.br",
//     senha: "amora",
//     createdAt: "2024-08-20",
//   },
// ];

app.use((request, response, next) => {
  console.log(request.url);
  if (request.url !== "/usuarios") {
    return response.json({ mensagem: "Error" });
  }
  next();
});

/**
 * RESPONSAVEL POR ROTAS E SERVIDOR
 */
/**rotas usuarios*/
app.get("/usuarios", usuariosControllers.index);

/**Criar usuario */

app.get("/usuarios", usuariosControllers.create);

// app.listen(3333, () => {
//   console.log("Server running in port 3333");
// });

const port = 3333;
const hostname = "localhost";

app.listen(port, hostname, () => {
  console.log(
    `Servidor está rodando na porta ${port}: http://${hostname}:${port}`
  );
});
