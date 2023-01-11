const replyService = require("../service/reply_service");

module.exports.replyWrite = async (req, res) => {
  const { user_id, reply, board_id } = req.body;

  const createReply = await replyService.replyCreate(user_id, reply, board_id);

  if (createReply) {
    res.send("success");
  } else {
    res.send("fail");
  }
};
