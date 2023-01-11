import React from "react";
import { Header } from "../com";

const Find = (props) => {
  const { onChangeFind, findUser } = props;

  return (
    <div className="main">
      <Header />
      <div className="body">
        <div className="logInput">
          <input onChange={onChangeFind} placeholder="이름을 입력해주세요" />
        </div>
        <div className="btn">
          <button onClick={findUser}>ID 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default Find;
