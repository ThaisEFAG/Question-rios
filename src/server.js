const express = require("express");
const UsuariosControllers = require("./dominios/usuarios/UsuariosControllers");

const app = express();

app.use(express.json()); // middleware => interceptador

const usuariosControllers = new UsuariosControllers();

/**
 * RESPONSAVEL POR ROTAS E SERVIDOR
 */
/**rotas usuarios*/
app.get("/usuarios", usuariosControllers.index);
app.post("/usuarios", usuariosControllers.createUser);
app.delete("/usuarios/:id", usuariosControllers.delete);

const PORT = process.env.PORT;
const hostname = "localhost";

app.listen(PORT, () => {
  console.log(
    `Servidor está rodando na porta ${PORT}: http://${hostname}:${PORT}`
  );
});
// app.listen(port, hostname, () => {
//   console.log(
//     `Servidor está rodando na porta ${port}: http://${hostname}:${port}`
//   );
// });
