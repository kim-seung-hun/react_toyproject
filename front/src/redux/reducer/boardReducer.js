let init = {
  user_id: "",
  content: "",
};

function reducer(state = init, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user_id: payload.user_id,
        user_name: payload.user_name,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user_id: "",
        user_name: "",
        isLogin: false,
      };

    default:
      return state;
  }
}

export default reducer;
