const { User, Board } = require("../model");

module.exports.boardWriteCreate = async (user_id, title, content) => {
  const user = await User.findOne({
    where: { user_id: user_id },
  });

  return await Board.create({
    title: title,
    content: content,
    user_id: user.dataValues.id,
  });
};

module.exports.boardWritting = async () => {
  return await Board.findAll({
    include: [
      {
        attributes: ["user_id"],
        model: User,
      },
    ],
    order: [["createdAt", "DESC"]],
  });
};

module.exports.boardDetail = async (params) => {
  return await Board.findOne({
    include: [
      {
        attributes: ["user_id"],
        model: User,
      },
    ],
    where: { id: params },
  });
};
