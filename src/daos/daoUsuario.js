const dao = require("investira.server.sdk").dao;
const daoUsuario = {};

module.exports = dao(daoUsuario, "usuario", {
  usuario_id: {
    autoIncrement: true
  },
  nome: {},
  aniversario: { type: "date" },
  created: { type: "date" }
});
