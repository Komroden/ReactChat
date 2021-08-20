import { useEffect } from 'react';
export const BotSend = (messages, plusMessage) => {
    useEffect(() => {
        const lastMessage = messages?.slice(-1);
        if (lastMessage?.length && lastMessage[0].author !== 'Bot') {
            setTimeout(plusMessage, 1500, 'Bot', "Hello!")
        }
    }, [messages])
}