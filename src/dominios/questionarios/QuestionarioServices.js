const { Questionarios } = require("../../database/models/questionarios");

class QuestionarioServices {
  async list(carregarPerguntas = false) {
    let questionarios;
    if (carregarPerguntas) {
      questionarios = await Questionarios.scope("carregarPerguntas").findAll();
    } else {
      questionarios = await Questionarios.findAll();
    }
    return questionarios;
  }

  async create({ titulo, descricao }) {
    const questionario = await Questionarios.create({
      titulo,
      descricao,
    });

    return questionario;
  }

  async updte() {}

  async delete() {
    const questionarioExiste = await Questionarios.findByPk(id);

    if (!questionarioExiste) {
      return false;
    }
    await questionarioExiste.destroy();
    return true;
  }
}

module.exports = QuestionarioServices;
