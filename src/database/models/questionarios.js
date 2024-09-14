const Sequelize = require("sequelize");
const database = require("../config");

const Questionarios = database.define(
  "questionarios",
  {
    id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    titulo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.Date,
      defaulValue: Sequelize.NOW,
    },
    updatedAt: {
      tipe: Sequelize.Date,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    scopes: {
      carregarPerguntas: {
        include: ["perguntas"],
      },
    },
  }
);

const Perguntas = database.depfine("perguntas", {});

Questionarios.hasMany(Perguntas, {
  foreignKey: "questionarioId",
  as: "perguntas",
});

Perguntas.belongsTo(Questionarios, { foreignKey: "questionarioId" });

module.exports = {
  Questionarios,
  Perguntas,
};
