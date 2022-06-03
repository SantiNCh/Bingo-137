import React from 'react';

import classes from './Button.module.css';
const Button = (props) => {

  const restart = () =>{
    window.location.reload();
  }
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button}`}
      onClick={restart}
    >
      {props.children}
    </button>
  );
};

export default Button;
