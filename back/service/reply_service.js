const { User, Board, Reply } = require("../model");

module.exports.replyCreate = async (user_id, reply, board_id) => {
  const user = await User.findOne({
    where: { user_id: user_id },
  });
  //   console.log(user);
  return await Reply.create({
    user_id: user.dataValues.id,
    reply: reply,
    board_id: board_id,
  });
};

module.exports.replyFind = async (board_id) => {
  return await Reply.findAll({
    include: [
      {
        attributes: ["user_id"],
        model: User,
      },
    ],
    order: [["createdAt", "DESC"]],
    where: { board_id: board_id },
  });
};
