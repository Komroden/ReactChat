import {useState} from "react";
export const AddMessage=()=>{
    const [messages, setMessages] = useState([ 
        
    ]);
    const plusMessage = (author, text) => {
      setMessages((messages) => {
        return ([ 
          ...messages, 
          { 
            author, 
            text, 
          } 
        ]); 

      })}
      const clear = () => {
        setMessages([]); 
       }

      return [
        messages,
        {
          plusMessage,
          clear
        }
      ]
    };
    