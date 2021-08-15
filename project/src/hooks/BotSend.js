import {
    useEffect
} from "react";
export const AutoBot = ([messages]) => {
    useEffect(() => {
        const lastMessage = messages?.slice(-1); 
        if (lastMessage?.length && lastMessage[0].author !== 'Bot') {
         
  }
        }, [messages])}