import React from "react";
import { Input, Atag, Btn } from "../comTag";

const Body = (props) => {
  const styles = {
    marTop: {
      marginTop: "20px",
    },
  };

  const { isLoggedIn, onClickLogin, onClickLogOut } = props;

  return (
    <div className="body" style={styles.marTop}>
      {isLoggedIn ? (
        <div className="myText">사용자 님 My Page</div>
      ) : (
        <Input inputTxt={props.inputTxt} />
      )}

      {isLoggedIn ? (
        <div className="linkPos">
          <Atag txt="로그아웃" onClickLogOut={onClickLogOut} />
        </div>
      ) : (
        <div className="linkPos">
          <Atag path={props.path} txt="회원가입" />
        </div>
      )}

      {isLoggedIn ? (
        <div className="btnPos">
          <Btn
            isLoggedIn={isLoggedIn}
            pathBtn="/board"
            text="게시판 이동"
            onClickLogin={onClickLogin}
          />
        </div>
      ) : (
        <Btn text={props.text} onClickLogin={onClickLogin} />
      )}
    </div>
  );
};

export default Body;
