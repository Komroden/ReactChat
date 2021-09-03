  
import React from 'react';
import {CreateMessageForm} from "../../components/CreateMessageForm";
import {useParams} from "react-router-dom";
import {MessageList} from "../../components/MessageList";


export const MessagePage = (props) => {
  const {chatId} = useParams();
  return (
    <div>
      <CreateMessageForm chatId={chatId}/>
      <MessageList chatId={chatId}/>
    </div>
  );
};