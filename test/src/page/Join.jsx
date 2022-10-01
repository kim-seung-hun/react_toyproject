import React from "react";
import { Header, JoinBody } from "../com";

const Join = (props) => {
  return (
    <div className="main">
      <Header />
      <JoinBody
        inputTxt="사용할 아이디 입력"
        text="join"
        onChangeHandle={props.onChangeHandle}
        user={props.user}
        joinUser={props.joinUser}
      />
    </div>
  );
};

export default Join;
