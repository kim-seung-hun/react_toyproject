import { Header } from "../com";
import React, { Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../redux/middleware";

const Main = () => {
  const styles = {
    marTop: {
      marginTop: "20px",
    },
  };

  const nav = useNavigate();
  const dispatch = useDispatch();

  const idRef = useRef();

  const isLogin = useSelector((state) => state.userReducer.isLogin);
  const user_name = useSelector((state) => state.userReducer.user_name);

  const login = () => {
    if (idRef.current.value) {
      dispatch(userAction.login(idRef.current.value));
    } else {
      alert("아이디를 입력해 주세요");
    }
  };

  const logOut = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      dispatch({ type: "LOGOUT" });
      alert("로그아웃 되었습니다.");
    }
  };

  return (
    <div className="main">
      <Header />
      <div className="body" style={styles.marTop}>
        {isLogin ? (
          // 로그인 상태
          <Fragment>
            <div className="myText">{user_name} 님 My Page</div>
            <div className="linkPos">
              <div className="atag" onClick={logOut}>
                <Link>로그아웃</Link>
              </div>
            </div>
            <div className="btnPos">
              <button
                onClick={() => {
                  nav("/board");
                }}
              >
                게시판으로 이동
              </button>
            </div>
          </Fragment>
        ) : (
          // 로그아웃 상태
          <Fragment>
            <div className="logInput">
              <input ref={idRef} name="writeId" placeholder="ID" />
            </div>
            <div className="linkPos">
              <div className="atag">
                <Link to="/join">회원가입</Link>
              </div>
              <div className="atag">
                <Link to="/find">ID 찾기</Link>
              </div>
            </div>
            <div className="btnPos">
              <button onClick={login}>Login</button>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Main;
