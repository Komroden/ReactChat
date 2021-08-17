import React from 'react';
import { TextField } from "@material-ui/core";
import './style.scss';
export const Input = (props) => {

  const { func } = props;
  return (
    <TextField
      id="filled-basic"
      label="Our message"
      onChange={func}
      autoFocus={true}
    />
  );
}
