import React from 'react';
import {CreateChatForm} from "../../components/CreateChatForm";
import {ChatList} from "../../components/ChatList";

export const ChatsPage = (props) => {
  return (
    <div>
      <CreateChatForm/>
      <ChatList list={[{id: '1', title: '1'}]}/>
    </div>
  );
};