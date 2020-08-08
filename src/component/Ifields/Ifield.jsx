import React from 'react';
import './Ifield.css';

const Ifield = (props) => {
  return(
    <>
    <input 
        name={ props.name } 
        onBlur={ props.onblurHandel } 
        onChange={ props.onchangeHandel }
        onSubmitForm={ props.formSubmission }
        type={ props.type } 
    />
    </>
  )
}

export default Ifield;