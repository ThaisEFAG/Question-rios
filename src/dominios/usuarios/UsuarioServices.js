const { v4: uuid } = require("uuid");

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

class UsuarioService {
  list() {
    return usuarios;
  }

  post(usuarioDTO) {
    const usuarioExiste = usuarios.find(
      (usuario) => usuario.email === usuarioDTO.email
    );

    if (usuarioExiste) {
      return null;
    }

    const novoUsuario = {
      id: uuid(),
      nome: usuarioDTO.nome,
      sobrenome: usuarioDTO.sobrenome,
      email: usuarioDTO.email,
      createdAt: new Date().toLocaleDataString(),
    };

    usuarios.push(novoUsuario);
    return novoUsuario;
  }

  update() {}

  delete(id) {
    const usuarioExiste = usuarios.find((usuario) => usuario.id === id);

    if (!usuarioExiste) {
      return false;
    }
    return true;
  }
}

module.exports = UsuarioService;
