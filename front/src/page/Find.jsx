import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../com";
import { userAction } from "../redux/middleware";

const Find = () => {
  const dispatch = useDispatch();

  const idRef = useRef();

  const findId = () => {
    if (idRef.current.value) {
      dispatch(userAction.findId(idRef.current.value));
    } else {
      alert("정보를 입력해 주세요");
    }
  };
  return (
    <div className="main">
      <Header />
      <div className="body">
        <div className="logInput">
          <input ref={idRef} placeholder="이름을 입력해주세요" />
        </div>
        <div className="btnPos">
          <button onClick={findId}>ID 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default Find;
