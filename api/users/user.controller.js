const userService = require("./user.service");
const { genSaltSync, hashSync } = require("bcrypt");

module.exports = {
  createUser: async (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    //console.log(salt);
    body.senha = hashSync(body.senha, salt);

    userService.create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getAllUsers: async (req, res) => {
    userService.getAllUsers(req.body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
