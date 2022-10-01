import React, { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Board = (props) => {
  const { logId, resistContent, contents, setContent, setContents } = props;

  const [write, setWrite] = useState("");
  const [isEmit, setIsEmit] = useState("수정");
  const [emit, setEmit] = useState("");

  const styles = {
    margin: {
      margin: "50px auto",
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
    },
    update: {
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  const nav = useNavigate();

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setStart((currentPage - 1) * 15);
    setEnd(currentPage * 15);
  }, [currentPage]);

  const pageNum = [1];
  for (let i = 1; i < Math.ceil(contents?.length / 15); i++) {
    pageNum.push(i + 1);
  }

  const onRemove = (e) => {
    contents.splice(Number(e.target.className), 1);
    alert("삭제되었습니다");
    nav("/board");
  };

  const onClickEmit = (e) => {
    setIsEmit(e.target.className);
  };

  const onChangeEmit = (e) => {
    setEmit(e.target.value);
  };

  console.log(contents);

  const emitComplete = (e) => {
    const eNum = Number(e.target.className);
    let newCont = [...contents];
    newCont[eNum].write = emit;
    setContents(newCont);
    setIsEmit("수정");
  };

  const contentList = contents?.slice(start, end).map((v, index) => (
    <div style={styles.flex} key={index}>
      {v.writeId == "manager" ? (
        <div style={styles.MaWidth30}>{v.writeId}</div>
      ) : (
        <div style={styles.width30}>{v.writeId}</div>
      )}
      {isEmit == index ? (
        <div style={styles.update}>
          <input
            style={{
              border: "1px solid #fa6ee3",
              backgroundColor: "black",
              height: "100%",
              color: "white",
            }}
            onChange={onChangeEmit}
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
        <div style={styles.width70}>{v.write}</div>
      )}
      {v.writeId == logId ? (
        <div
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
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

  const contentListManager = contents?.slice(start, end).map((v, index) => (
    <div style={styles.flex} key={index}>
      {v.writeId == "manager" ? (
        <div style={styles.MaWidth30}>{v.writeId}</div>
      ) : (
        <div style={styles.width30}>{v.writeId}</div>
      )}
      {isEmit == index ? (
        <div style={styles.update}>
          <input
            style={{
              border: "1px solid #fa6ee3",
              backgroundColor: "black",
              height: "100%",
              color: "white",
            }}
            onChange={onChangeEmit}
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
        <div style={styles.width70}>{v.write}</div>
      )}
      <div
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {v.writeId == logId ? (
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
        ) : (
          ""
        )}
        <button
          style={{
            backgroundColor: "black",
            color: "#fa6ee3",
            borderStyle: "none",
            width: "40px",
            fontWeight: "900",
            cursor: "grab",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={index}
          onClick={onRemove}
        >
          {"[삭제]"}
        </button>
      </div>
    </div>
  ));

  const onChangeHandle = useCallback(
    (e) => {
      setWrite(e.target.value);
    },
    [write]
  );

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
                fontSize: "25px",
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
            <div className="cont1" style={{ width: "30%" }}>
              작성자
            </div>
            <div className="cont2" style={{ width: "50%" }}>
              내용
            </div>
            <div style={{ width: "20%" }}></div>
          </div>
          {logId == "manager" ? (
            <div style={styles.contents}>{contentListManager}</div>
          ) : (
            <div style={styles.contents}>{contentList}</div>
          )}
          {pagination}
          <div className="send">
            <div className="sendcont1">{logId} 님</div>
            <input
              name="write"
              className="sendcont2"
              placeholder="내용 입력해주세요"
              onChange={onChangeHandle}
            />
            <button
              className="sendcont3"
              onClick={() => {
                setContent((current) => {
                  const newContent = { ...current };
                  newContent.write = write;
                  return newContent;
                });
              }}
            >
              등록
            </button>
            <button
              className="sendcont3"
              onClick={() => {
                resistContent();
                alert("등록되었습니다");
              }}
            >
              올리기
            </button>
          </div>
        </div>
        <div style={styles.margin} className="btn">
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
