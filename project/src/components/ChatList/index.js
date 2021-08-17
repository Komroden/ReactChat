import React from 'react';
import { ChatItem } from "../ChatItem"
export const ChatList = () => {

    const chats = [
        {
            id: 1,
            name: "React"
        },
        {
            id: 2,
            name: "TypeScript"
        }
    ];


    return (
        <ChatItem chats={chats}></ChatItem>
    )
}


