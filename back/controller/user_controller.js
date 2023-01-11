const userService = require("../service/user_service");

// 회원가입
module.exports.joinUserCreate = async (req, res) => {
  const { user_id, user_name } = req.body;
  const isJoin = await userService.joinFindOne(user_id, user_name);

  if (isJoin) {
    res.send("success");
  } else {
    res.send("fail");
  }
};

// 아이디 찾기
module.exports.findUserId = async (req, res) => {
  const { user_name } = req.body;
  const isfind = await userService.findUserId(user_name);

  if (isfind) {
    res.send({ message: "success", user_id: isfind });
  } else {
    res.send({ message: "fail" });
  }
};

// 로그인
module.exports.loginUserFind = async (req, res) => {
  const { user_id } = req.body;
  const isLogin = await userService.loginUserFind(user_id);

  if (isLogin) {
    res.send({ message: "success", user_name: isLogin });
  } else {
    res.send({ message: "fail" });
  }
};
