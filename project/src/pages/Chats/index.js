import React, { useParams, useState } from 'react';
import { ChatList } from "../../components/ChatList"
import { MessageList } from "../../components/MessageList"

export const Chats = (props) => {


    return (
        <div>

            <MessageList />
            <ChatList />
        </div>
    );
};