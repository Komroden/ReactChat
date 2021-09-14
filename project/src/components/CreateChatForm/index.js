import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';
import {useSimpleForm} from "../../hooks/useSimpleForm";
import {chatsConnect} from "../../connects/chats";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const CreateChatFormRender = ({addChat}) => {
  const classes = useStyles();
  const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});

  const handleSubmit =  (event) => {
    event.preventDefault();


    const Chat = {
      id: Date.now().toString(),
      title: getFieldValue('title')
    }
    addChat(Chat)

    resetForm();
  }

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField
        name='title'
        value={getFieldValue('title')}
        onChange={(event) => {
          setFieldValue('title', event.target.value);
        }}
        label="Title" />
      <Button type="submit">Save</Button>
    </form>
  );
};

export const CreateChatForm = chatsConnect(CreateChatFormRender);