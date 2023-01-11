const { User } = require("../model");

module.exports.joinFindOne = async (user_id) => {
  try {
    return await User.findOne({ where: { user_id } }).then((e) => {
      if (e == null) {
        return User.create({
          user_id,
        });
      } else {
        return false;
      }
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports.loginFindOne = async (user_id) => {
  return await User.findOne({ where: { user_id } }).then((e) => {
    if (e !== null) {
      return true;
    } else {
      return false;
    }
  });
};
