import React from "react";
import './Blocks.css';

const Block = (props) => {
  return (
    <>
       <div className="blocks">{props.value}</div>
    </>
  );
};
export default Block;
