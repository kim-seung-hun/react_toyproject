const boardService = require("../service/board_service");
const replyService = require("../service/reply_service");

module.exports.boardView = async (req, res) => {
  const boardList = await boardService.boardWritting();
  const user_id = req.session.user_id;
  res.render("board", { boardList, user_id });
};

module.exports.writeView = (req, res) => {
  res.render("write");
};

module.exports.boardWrite = async (req, res) => {
  const { title, content } = req.body;
  // console.log(req.session.user_id);

  const createContent = await boardService.boardWriteCreate(
    req.session.user_id,
    title,
    content
  );

  if (createContent) {
    res.send("success");
  } else {
    res.send("fail");
  }
};

module.exports.boardChcek = async (req, res) => {
  const id = await boardService.boardDetail(req.params.id);
  const reply = await replyService.replyFind(req.params.id);
  const user_id = req.session.user_id;
  res.render("detail", { id, user_id, reply });
};

module.exports.viewCount = async (req, res) => {
  
};
