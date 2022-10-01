import React from "react";
import { Link } from "react-router-dom";

const Atag = (props) => {
  return (
    <div className="atag" onClick={props.onClickLogOut}>
      <Link to={props.path}>{props.txt}</Link>
    </div>
  );
};

export default Atag;
