import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { boardAction } from "../redux/middleware";

const Board = () => {
  const styles = {
    margin: {
      margin: "30px auto",
    },
    contents: {
      color: "white",
      margin: "15px",
    },
    flex: {
      display: "flex",
      margin: "10px",
    },
    width30: {
      width: "30%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "13px",
    },
    MaWidth30: {
      width: "30%",
      color: "yellow",
      fontWeight: "900",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    width70: {
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "13px",
    },
    update: {
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    axios("http://localhost:8000/board").then((e) => {
      setBoardList(e.data.boardList);
    });
  }, []);

  const nav = useNavigate();
  const dispatch = useDispatch();

  const user_id = useSelector((state) => state.userReducer.user_id);

  const contentRef = useRef();

  const contentResister = () => {
    if (contentRef.current.value) {
      dispatch(boardAction.create(user_id, contentRef.current.value));
      contentRef.current.value = "";
    } else {
      alert("내용을 입력해 주세요");
    }
  };
  //////////////////////////////////////////////////////////////////////////////////////

  // Pagination

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setStart((currentPage - 1) * 11);
    setEnd(currentPage * 11);
  }, [currentPage]);

  const pageNum = [1];
  for (let i = 1; i < Math.ceil(boardList?.length / 11); i++) {
    pageNum.push(i + 1);
  }

  //////////////////////////////////////////////////////////////////////////////////

  const onRemove = async (e) => {
    const num = Number(e.target.parentNode.className);
    const result = await axios({
      method: "post",
      data: {
        id: num,
      },
      url: "http://localhost:8000/board/delete",
    });
    if (result.data === "success") {
      boardList.splice(Number(e.target.className), 1);
      alert("삭제되었습니다");
    } else {
      alert("실패!");
    }
  };

  const [isEmit, setIsEmit] = useState();
  const emitRef = useRef();

  // [수정] 버튼 클릭 시 isEmit을 나타나게 하기 위해 index 값 넣어줌
  const onClickEmit = (e) => {
    setIsEmit(e.target.className);
  };

  // [수정완료] 버튼을 누르면 해당 className을 통해 배열의 index 값을 알아내 해당 contents의 write를 바꿈
  const emitComplete = async (e) => {
    const num = Number(e.target.parentNode.className);
    const index = e.target.className;

    const result = await axios({
      method: "post",
      url: "http://localhost:8000/board/update",
      data: {
        id: num,
        content: emitRef.current.value,
      },
    });
    if (result.data === "success") {
      setIsEmit("-1");
      alert("수정완료");
    } else {
      alert("실패!");
    }
  };

  // pagination start 와 end를 이용해 정해진 수만큼 content를 보여줌
  // 일반 유저의 list
  const contentList = boardList?.slice(start, end).map((v, index) => (
    <div style={styles.flex} key={index}>
      <div>{index}</div>
      <div style={styles.width30}>{v.user_id}</div>
      {isEmit == index ? (
        <div style={styles.update} className={v.id}>
          <input
            ref={emitRef}
            style={{
              border: "1px solid #fa6ee3",
              backgroundColor: "black",
              height: "100%",
              color: "white",
            }}
          />
          <button
            style={{
              backgroundColor: "black",
              color: "#fa6ee3",
              borderStyle: "none",
              width: "60px",
              marginLeft: "10px",
              fontWeight: "900",
              cursor: "grab",
            }}
            className={index}
            onClick={emitComplete}
          >
            {"[수정 완료]"}
          </button>
        </div>
      ) : (
        <div style={styles.width70}>{v.content}</div>
      )}
      {v.user_id == user_id ? (
        <div
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={v.id}
        >
          <button
            style={{
              backgroundColor: "black",
              color: "#fa6ee3",
              borderStyle: "none",
              width: "40px",
              fontWeight: "900",
              cursor: "grab",
            }}
            className={index}
            onClick={onClickEmit}
          >
            {"[수정]"}
          </button>
          <button
            style={{
              backgroundColor: "black",
              color: "#fa6ee3",
              borderStyle: "none",
              width: "40px",
              fontWeight: "900",
              cursor: "grab",
            }}
            className={index}
            onClick={onRemove}
          >
            {"[삭제]"}
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  ));

  // pagination
  const pagination = (
    <nav
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        color: "white",
        position: "absolute",
        width: "100%",
        bottom: "80px",
      }}
    >
      {pageNum.map((num) => {
        return (
          <li
            style={{
              margin: "5px",
            }}
            key={num}
          >
            <button
              style={{
                fontSize: "15px",
                fontWeight: "700",
                color: "#fa6ee3",
                backgroundColor: "black",
                borderStyle: "none",
                cursor: "grab",
              }}
              onClick={() => {
                setCurrentPage(num);
              }}
            >
              {num}
            </button>
          </li>
        );
      })}
    </nav>
  );

  return (
    <div className="main">
      <div className="board">
        <div className="boardTitle">Board</div>
        <div className="boardContent">
          <div className="conTitle">
            <div className="cont1" style={{ width: "35%" }}>
              작성자
            </div>
            <div className="cont2" style={{ width: "40%" }}>
              내용
            </div>
            <div style={{ width: "25%" }}></div>
          </div>
          <div style={styles.contents}>{contentList}</div>
          {pagination}
          <div className="send">
            <div className="sendcont1">{user_id} 님</div>
            <input
              ref={contentRef}
              className="sendcont2"
              placeholder="내용 입력해주세요"
            />
            <button className="sendcont3" onClick={contentResister}>
              등록
            </button>
          </div>
        </div>
        <div style={styles.margin} className="btnPos">
          <button
            onClick={() => {
              nav("/");
            }}
          >
            마이페이지 이동
          </button>
        </div>
      </div>
    </div>
  );
};

export default Board;
