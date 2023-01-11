const router = require("express").Router();
const userController = require("../controller/user_controller");

router.post("/signUp", userController.joinUserCreate);

router.post("/find", userController.findUserId);

router.post("/login", userController.loginUserFind);

module.exports = router;
