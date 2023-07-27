const db = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    console.log("Create");
    db.query(
      "Insert into Usuario (Nome,Email,Senha) values (?,?,?)",
      [data.nome, data.email, data.senha],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getAllUsers: (data, callBack) => {
    console.log("getAllUsers");
    db.query(
      "Select Nome,Email,Senha from test.Usuario",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
