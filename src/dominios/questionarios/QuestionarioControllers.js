const QuestionarioServices = require("./QuestionarioServices");

const questionarioServices = new QuestionarioServices();

class QuestionarioController {
  /***
   *  @param {import('express').Request} request;
   *   @param {import('express').Request} response;
   *   @returns
   */

  async index(request, response) {
    const { carregarPerguntas } = request.query;
    const listaQuestionarioss = await questionarioServices.list(
      carregarPerguntas
    );

    return response.json(listaQuestionarios);
  }

  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   * @returns
   */

  async create(request, response) {
    const { body } = request;

    const Questionarios = await questionarioServices.create(body);
    return response.status(201).json(Questionarios);
  }
}

module.exports = QuestionarioController();
