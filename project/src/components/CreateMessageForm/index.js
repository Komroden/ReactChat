import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';
import {useSimpleForm} from "../../hooks/useSimpleForm";
import {messagesConnect} from "../../connects/messages";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const CreateMessageFormRender = ({chatId, addMessages,botMessages}) => {
  const classes = useStyles();
  const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const messageBot={
      chatId,
      author:"Bot",
      id: Date.now().toString(),
      content: "Hello!"
    }

    const message = {
      chatId,
      author:"Kirill",
      id: Date.now().toString(),
      content: getFieldValue('content')
    }

    addMessages(message);
    botMessages(messageBot)
    resetForm();
  }
  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField
        name='content'
        value={getFieldValue('content')}
        onChange={(event) => {
          setFieldValue('content', event.target.value);
        }}
        label="Content" />
      <Button type="submit">Save</Button>
    </form>
  );
};

CreateMessageFormRender.propTypes  = {
  chatId: propTypes.string.isRequired,
}

export const CreateMessageForm = messagesConnect(CreateMessageFormRender);



