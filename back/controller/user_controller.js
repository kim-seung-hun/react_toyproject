const userService = require("../service/user_service");

// 회원가입
module.exports.joinUserCreate = async (req, res) => {
  const { id } = req.body;
  const isJoin = await userService.joinFindOne(id);

  if (isJoin) {
    res.send("success");
  } else {
    res.send("fail");
  }
};

// 로그인 화면 띄우기
module.exports.loginView = (req, res) => {
  res.render("login");
};

// 로그인
module.exports.loginUserFind = async (req, res) => {
  const isLogin = await userService.loginFindOne(req.body.log);

  if (isLogin) {
    req.session.user_id = req.body.log;
    res.send("success");
  } else {
    res.send("fail");
  }
};
