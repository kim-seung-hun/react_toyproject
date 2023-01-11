import axios from "axios";

function create(user_id, content) {
  return async (dispatch, getState) => {
    const result = await axios({
      method: "post",
      url: "http://localhost:8000/board/create",
      data: {
        user_id,
        content,
      },
    });
    if (result.data === "success") {
      alert("등록 완료!");
    } else {
      alert("실패!");
    }
  };
}

export const boardAction = {
  create,
};
