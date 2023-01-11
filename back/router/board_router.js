const router = require("express").Router();
const boardController = require("../controller/board_controller");

router.get("/", boardController.boardView);

router.post("/create", boardController.boardWrite);

router.post("/delete", boardController.boardDelete);

router.post("/update", boardController.boardUpdate);

module.exports = router;
