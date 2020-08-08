import React from 'react';
import './Button.css';

const Button = (props) => {
  return(
    <>
    <button type={ props.type } className="styled-btn">{props.value}</button>
    </>
  )
}

export default Button;