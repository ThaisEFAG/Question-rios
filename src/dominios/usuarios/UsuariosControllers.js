const UsuarioService = require("./UsuarioServices");

const usuarioService = new UsuarioService();

class UsuariosControllers {
  index(request, response) {
    const listaUsuarios = usuarioService.list();
    return response.json(listaUsuarios);
  }

  createUser(request, response) {
    const { body } = request;

    const usuario = usuarioService.createUser(body);
    return response.status(201).json(usuario);
  }

  delete(request, response) {
    const { id } = request.params;
    const deleted = usuarioService.delete(id);

    if (!deleted) {
      return response.status(400).json({ message: "Não foi possível apagar" });
    }

    return response.status(204).end();
  }
}

module.exports = UsuariosControllers;
