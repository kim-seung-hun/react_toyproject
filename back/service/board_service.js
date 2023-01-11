const { User, Board } = require("../model");

module.exports.boardWriteCreate = async (user_id, content) => {
  // const user = await User.findOne({
  //   where: { user_id: user_id },
  // });

  return await Board.create({
    user_id,
    content,
    // user_id: user.dataValues.id,
  });
};

module.exports.boardWritting = async () => {
  return await Board.findAll();
};

module.exports.boardDelete = async (id) => {
  return await Board.destroy({ where: { id } });
};

module.exports.boardUpdate = async (id, content) => {
  return await Board.update({ content }, { where: { id } });
};

// module.exports.boardDetail = async (params) => {
//   return await Board.findOne({
//     include: [
//       {
//         attributes: ["user_id"],
//         model: User,
//       },
//     ],
//     where: { id: params },
//   });
// };
