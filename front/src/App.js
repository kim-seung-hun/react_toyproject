import "./App.css";
import React, { useState, useCallback } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Main, Join, Board, Find } from "./page";

function App() {
  const nav = useNavigate();

  // 회원가입시 user state
  const [user, setUser] = useState({
    userId: "",
    userName: "",
  });

  // 회원가입된 user들의 state를 users에 담아놈
  const [users, setUsers] = useState([]);

  // 현재 로그인된 userId
  const [logId, setLogId] = useState("");

  // user가 게시판에 작성된 글
  const [content, setContent] = useState({
    writeId: "",
    write: "",
  });
  //
  // 게시판의 모든 작성글을 배열에 담음
  const [contents, setContents] = useState([]);

  // 아이디 찾기에서 이름 state
  const [findName, setFindName] = useState("");

  ////////////////////////////////////////////////////////////////

  // ID찾기에서 찾으려는 아이디의 이름 Input 값으로 받고 , update 한다
  const onChangeFind = useCallback((e) => {
    setFindName(e.target.value);
  });

  // users의 배열에서 findName이 있는지 확인하여 true를 return 한다
  const isName = (e) => {
    if (e.userName === findName) {
      return true;
    }
  };
  // ID찾기 에서 users 배열에 이름이 있으면 찾은 이름의 users 객체의 userId를 반환한다.
  // 없으면 alert로 표시한다.
  const findUser = useCallback(() => {
    if (users.find(isName)) {
      alert(`아이디 : ${users.find(isName).userId}`);
      nav("/");
    } else {
      alert("아이디가 없으니 , 이름을 다시 확인해주세요");
    }
  });

  // 회원가입시 join에서 아이디와 이름의 input값을 받아온다.
  const onChangeHandle = useCallback(
    (e) => {
      const { name, value } = e.target;

      setUser((current) => {
        const newUser = { ...current };
        newUser[name] = value;
        return newUser;
      });
    },
    [user]
  );

  // join에서 받아온 input값을 통해 users에 해당 userId가 존재하는지 확인한다.
  const isUser = (element) => {
    if (element.userId === user.userId) {
      return true;
    }
  };
  // isUser가 true이면 아이디가 존재하므로 alert로 표시한다.
  // 존재하지 않으면 users 배열에 해당 user를 추가한다.
  const joinUser = useCallback(() => {
    if (users.find(isUser)) {
      alert("이미 존재하는 아이디입니다.");
    } else {
      alert(`아이디 : ${user.userId} , 이름 : ${user.userName}`);
      setUsers((currentArray) => [...currentArray, user]);
      nav("/");
    }
  }, [user, users]);

  ////////////////////////////////////////////////////////////////////

  // 게시판에서 logId가 content를 작성하면 추가해준다.
  const resistContent = useCallback(() => {
    setContents((currentArray) => [...currentArray, content]);
  }, [content]);

  //////////////////////////////////////////////////////////////////////

  // 로그인이 성공하였을때 true로 바뀌면서 mypage로 이동할수 있다.
  const [isLoggedIn, setLogin] = useState(false);

  ///////////////////////////////////////////////////////////////////////

  // 로그인이 되어있을 경우 board에 접속하고 (로그인되어야 갈수 있는 페이지를 Redirect에 추가한다.)
  // 로그인이 안되어있으면 전부 로그인 페이지로 이동
  const Redirect = () => {
    return isLoggedIn == true ? (
      <Board
        isLoggedIn={isLoggedIn}
        logId={logId}
        setContent={setContent}
        content={content}
        contents={contents}
        resistContent={resistContent}
        setContents={setContents}
      />
    ) : (
      <Navigate to={"/"} />
    );
  };

  // 각자 navigate를 통해 이동할수있다
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              user={user}
              users={users}
              login={setLogin}
              isLoggedIn={isLoggedIn}
              logId={logId}
              setLogId={setLogId}
              setUser={setUser}
              setContent={setContent}
              setContents={setContents}
            />
          }
        />
        <Route
          path="/join"
          element={
            <Join
              user={user}
              joinUser={joinUser}
              onChangeHandle={onChangeHandle}
            />
          }
        />
        <Route
          path="/find"
          element={<Find onChangeFind={onChangeFind} findUser={findUser} />}
        />
        <Route path="/board" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
