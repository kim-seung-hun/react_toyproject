import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "../redux/middleware";
import { Header } from "../com";

const Join = () => {
  const dispatch = useDispatch();

  const idRef = useRef();
  const nameRef = useRef();

  const signUp = () => {
    if (idRef.current.value && nameRef.current.value) {
      dispatch(userAction.signUp(idRef.current.value, nameRef.current.value));
    } else {
      alert("회원가입 정보를 입력해 주세요");
    }
  };

  return (
    <div className="main">
      <Header />
      <div className="body">
        <div className="logInput">
          <input ref={idRef} placeholder="사용할 아이디 입력" />
        </div>
        <div className="logInput">
          <input ref={nameRef} placeholder="이름" />
        </div>
        <div className="btnPos">
          <button onClick={signUp}>join</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
