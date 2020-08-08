import React from "react";
import "./Button.css";

const onClickHandler = (props) =>{
  if(props.value === 'submit'){
    alert('This will save form as draft and submit in local storage!!');
  }

}
const Button = (props) => {
 
  return (
    <>
      <button
        type={props.type}
        className="styled-btn"
        onClick = {onClickHandler}
      >
        {props.value}
      </button>
    </>
  );
};

export default Button;
