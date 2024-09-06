var usuarios = [
  {
    id: 1,
    nome: "Aurora",
    sobrenome: "Lobo",
    email: "aurora@email.com.br",
    senha: "aurora",
  },
  {
    id: 2,
    nome: "Amora",
    sobrenome: "lence",
    email: "amoraalab.com.br",
    senha: "amora",
  },
];

class UsuariosControllers {
  index(request, response) {
    return response.json(usuarios);
  }

  create(request, response) {
    try {
      const { body } = request;
      console.log(body);

      return response.json({ mensagem: "Usuario cadastrado com sucesso" });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UsuariosControllers;
