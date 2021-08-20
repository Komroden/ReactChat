import React, { useRef, useEffect } from 'react';
import { TextField } from "@material-ui/core";
import './style.scss';
import { func } from 'prop-types';
export const Input = (props) => {
  const inputRef = useRef(null);
  const { func } = props;
  useEffect(() => {
    inputRef.current.focus()
  });
  return (
    <TextField
      id="filled-basic"
      label="Our message"
      onChange={func}
      autoFocus={true}
      ref={inputRef}
    />
  );
}
Input.propTypes = { func: func }