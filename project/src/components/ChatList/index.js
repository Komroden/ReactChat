import React from 'react';
import { ChatItem } from "../ChatItem"
import { ThemeProvider } from '@material-ui/core/styles';
const theme = {
    palette: {
        primary: {
            main: "#FF9800",
        },
        secondary: {
            main: "#0098FF",
        },
    },
};

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
        <ThemeProvider theme={theme}>
            <ChatItem chats={chats}></ChatItem>
        </ThemeProvider>

    )
}


