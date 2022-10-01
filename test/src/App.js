import "./App.css";
import React, { useState, useCallback } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Main, Join, Board, Find } from "./page";

function App() {
  const nav = useNavigate();

  const [user, setUser] = useState({
    userId: "",
    userName: "",
  });

  const [users, setUsers] = useState([]);

  const [logId, setLogId] = useState("");

  const [content, setContent] = useState({
    writeId: "",
    write: "",
  });

  const [contents, setContents] = useState([]);

  const [findName, setFindName] = useState("");

  ////////////////////////////////////////////////////////////////

  const onChangeFind = useCallback((e) => {
    setFindName(e.target.value);
  });

  const isName = (e) => {
    if (e.userName === findName) {
      return true;
    }
  };

  const findUser = useCallback(() => {
    if (users.find(isName)) {
      alert(`아이디 : ${users.find(isName).userId}`);
      nav("/");
    } else {
      alert("아이디가 없으니 , 이름을 다시 확인해주세요");
    }
  });

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

  const isUser = (element) => {
    if (element.userId === user.userId) {
      return true;
    }
  };
  const joinUser = useCallback(() => {
    if (users.find(isUser)) {
      alert("이미 존재하는 아이디입니다.");
    } else {
      alert(`아이디 : ${user.userId} , 이름 : ${user.userName}`);
      setUsers((currentArray) => [...currentArray, user]);
      nav("/");
    }
  }, [user, users]);

  const resistContent = useCallback(() => {
    setContents((currentArray) => [...currentArray, content]);
  }, [content]);

  ////////////////////////////////////////////////////////////////////

  const [isLoggedIn, setLogin] = useState(false);

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
