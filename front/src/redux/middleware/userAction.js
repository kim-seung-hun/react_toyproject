import axios from "axios";

function signUp(user_id, user_name) {
  return async (dispatch, getState) => {
    const result = await axios({
      method: "post",
      url: "http://localhost:8000/signUp",
      data: {
        user_id,
        user_name,
      },
    });
    if (result.data === "success") {
      alert("회원가입 완료! 로그인 해주세요");
      window.location.href = "/";
    } else {
      alert("이미 아이디가 존재합니다.");
    }
  };
}

function findId(user_name) {
  return async (dispatch, getState) => {
    const result = await axios({
      method: "post",
      url: "http://localhost:8000/find",
      data: {
        user_name,
      },
    });
    if (result.data.message === "success") {
      const user_id = result.data.user_id;
      alert("아이디 : " + user_id[0].user_id);
      window.location.href = "/";
    } else {
      alert("가입한 아이디가 없습니다.");
    }
  };
}

function login(user_id) {
  return async (dispatch, getState) => {
    const result = await axios({
      method: "post",
      url: "http://localhost:8000/login",
      data: {
        user_id,
      },
    });
    if (result.data.message === "success") {
      alert("로그인 성공!");
      dispatch({
        type: "LOGIN",
        payload: { user_id, user_name: result.data.user_name[0].user_name },
      });
    } else {
      alert("가입한 아이디가 없습니다.");
    }
  };
}

export const userAction = {
  signUp,
  findId,
  login,
};
