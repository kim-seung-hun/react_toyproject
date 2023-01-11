import React from "react";

const JoinBody = (props) => {
  // const dispatch = useDispatch();

  // const onChangeHandle = (e) => {
  //   const { name, value } = e.target;
  //   dispatch({ type: "onChangeHandle", payload: { name: name, value: value } });
  // };

  return (
    // <form onSubmit={props.joinUser}>
    <div className="body">
      <div className="logInput">
        <input
          name="userId"
          onChange={props.onChangeHandle}
          // onChange={onChangeHandle}
          placeholder="사용할 아이디 입력"
        />
      </div>
      <div className="logInput">
        <input
          name="userName"
          onChange={props.onChangeHandle}
          // onChange={onChangeHandle}
          placeholder="이름"
        />
      </div>
      <div className="btn">
        <button onClick={props.joinUser}>{props.text}</button>
      </div>
    </div>
    // </form>
  );
};

export default JoinBody;
