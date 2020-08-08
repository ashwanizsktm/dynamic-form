import React from 'react';
import './label.css'

const Label = (props) => {
  return(
    <>
      <label htmlFor={props.value} className="styled-label">{props.value}</label>
    </>
  )
}

export default Label;