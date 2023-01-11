const boardService = require("../service/board_service");

module.exports.boardView = async (req, res) => {
  const boardList = await boardService.boardWritting();
  res.send({ boardList });
};

module.exports.boardWrite = async (req, res) => {
  const { user_id, content } = req.body;

  const createContent = await boardService.boardWriteCreate(user_id, content);

  if (createContent) {
    res.send("success");
  } else {
    res.send("fail");
  }
};

module.exports.boardDelete = async (req, res) => {
  const { id } = req.body;

  const deleteContent = await boardService.boardDelete(id);

  if (deleteContent) {
    res.send("success");
  } else {
    res.send("fail");
  }
};

module.exports.boardUpdate = async (req, res) => {
  const { id, content } = req.body;

  const updateContent = await boardService.boardUpdate(id, content);

  if (updateContent) {
    res.send("success");
  } else {
    res.send("fail");
  }
};
