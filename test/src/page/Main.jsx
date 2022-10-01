import { Header } from "../com";
import { Input, Atag, Btn } from "../comTag";
import React, { useState } from "react";

const Main = (props) => {
  const styles = {
    marTop: {
      marginTop: "20px",
    },
  };

  const { login, isLoggedIn, logId, setLogId, setContent, setUser } = props;

  const onChangeId = (e) => {
    setLogId(e.target.value);
  };

  const isId = (element) => {
    if (element.userId === logId) {
      return true;
    } else {
      return false;
    }
  };

  const onClickLogin = () => {
    if (props.users.find(isId)) {
      setContent((current) => {
        let newContent = { ...current };
        newContent.writeId = logId;
        return newContent;
      });
      login(true);
    } else {
      alert("아이디를 확인해주세요");
    }
  };

  const onClickLogOut = () => {
    login(false);
    setLogId("");
    setUser((current) => {
      const newUser = { ...current };

      newUser.userId = "";
      newUser.userName = "";

      return newUser;
    });
  };

  return (
    <div className="main">
      <Header />
      <div className="body" style={styles.marTop}>
        {isLoggedIn ? (
          <div className="myText">{logId} 님 My Page</div>
        ) : (
          <div className="logInput">
            <input name="writeId" onChange={onChangeId} placeholder="ID" />
          </div>
        )}

        {isLoggedIn ? (
          <div className="linkPos">
            <Atag txt="로그아웃" onClickLogOut={onClickLogOut} />
          </div>
        ) : (
          <div className="linkPos">
            <Atag path={"/join"} txt="회원가입" />
            <Atag path={"/find"} txt="ID찾기" />
          </div>
        )}

        {isLoggedIn ? (
          <div className="btnPos">
            <Btn
              logId={logId}
              isLoggedIn={isLoggedIn}
              pathBtn="/board"
              text="게시판 이동"
              onClickLogin={onClickLogin}
            />
          </div>
        ) : (
          <Btn text={"Login"} onClickLogin={onClickLogin} />
        )}
      </div>
    </div>
  );
};

export default Main;
