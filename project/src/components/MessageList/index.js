import React from 'react';
import propTypes from "prop-types";
import {messagesConnect} from "../../connects/messages";


export const MessageListRender = ({messages, ...rest}) => {
  console.log(messages, rest);
  return (
    <div>
      {
        messages?.map(({content,author, id}) => <div key={id}>{author}-{content}</div>)
      }
    </div>
  );
};


MessageListRender.propTypes = {
  messages: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string,
    chatId: propTypes.string,
    content: propTypes.string,
  }))
}

export const MessageList = messagesConnect(MessageListRender);











