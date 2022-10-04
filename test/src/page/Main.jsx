import { Header } from "../com";
import { Atag, Btn } from "../comTag";
import React from "react";

const Main = (props) => {
  const styles = {
    marTop: {
      marginTop: "20px",
    },
  };

  const { login, isLoggedIn, logId, setLogId, setContent, setUser } = props;

  // 로그인 페이지에서 input값에 로그인할 id를 logId에 update
  const onChangeId = (e) => {
    setLogId(e.target.value);
  };

  // 해당 id가 users에 있는지 확인하는 함수
  // 있으면 true를 내보낸다.
  const isId = (element) => {
    if (element.userId === logId) {
      return true;
    } else {
      return false;
    }
  };

  // button 클릭시 isId로 users 배열에 logId가 있는지 확인하여
  // logId가 존재하면 login state를 true로 update
  // board에서 글 작성 시 writeId에 login 시 미리 logId를 넣는다
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

  // logout시 login false로 바꾼다
  // logId도 빈칸으로 만든다.
  // user도 빈칸으로 만든다.
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
        {/* 로그인 시 login true로 바뀌면서 태그 바뀜 */}
        {isLoggedIn ? (
          <div className="myText">{logId} 님 My Page</div>
        ) : (
          <div className="logInput">
            <input name="writeId" onChange={onChangeId} placeholder="ID" />
          </div>
        )}

        {/* 회원가입,아이디찾기 / 로그아웃 삼항연산자 */}
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
