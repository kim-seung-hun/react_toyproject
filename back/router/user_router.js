const router = require("express").Router();
const userController = require("../controller/user_controller");

router.post("/join", userController.joinUserCreate);

router.get("/login", userController.loginView);

router.post("/login", userController.loginUserFind);

module.exports = router;
