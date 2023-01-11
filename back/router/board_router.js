const router = require("express").Router();
const boardController = require("../controller/board_controller");
const reqplyController = require("../controller/reply_controller");

router.get("/", boardController.boardView);

router.get("/write", boardController.writeView);

router.post("/write", boardController.boardWrite);

router.get("/detail/:id", boardController.boardChcek);

router.post("/reply", reqplyController.replyWrite);

router.post("/view", boardController.viewCount);

module.exports = router;
