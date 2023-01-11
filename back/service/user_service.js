const { User } = require("../model");

module.exports.joinFindOne = async (user_id, user_name) => {
  try {
    return await User.findOne({ where: { user_id } }).then((e) => {
      if (e == null) {
        return User.create({
          user_id,
          user_name,
        });
      } else {
        return false;
      }
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports.findUserId = async (user_name) => {
  try {
    return await User.findAll({
      where: { user_name },
      attributes: ["user_id"],
    }).then((e) => {
      if (e[0]?.dataValues.user_id) {
        return e;
      } else {
        return false;
      }
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports.loginUserFind = async (user_id) => {
  return await User.findAll({
    where: { user_id },
    attributes: ["user_name"],
  }).then((e) => {
    if (e[0]?.dataValues.user_name) {
      return e;
    } else {
      return false;
    }
  });
};
