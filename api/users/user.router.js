const controller = require("./user.controller");
const router = require("express").Router();

router.post("/", controller.createUser);
router.get("/getAll", controller.getAllUsers);

module.exports = router;
