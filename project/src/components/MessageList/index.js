import React,{useEffect} from 'react';
import './style.scss';
import {AddMessage} from "../../hooks/AddMessage";
import {AutoBot} from "../../hooks/BotSend";

export function MessageList() {
    const [messages,textInput, {plusMessage,clear,handlePress}] = AddMessage();
    
       
       
      useEffect(() => {
        const lastMessage = messages?.slice(-1); 
        if (lastMessage?.length && lastMessage[0].author !== 'Bot') {
         setTimeout(plusMessage,1500,'Bot',"Hello!") 
  }
        }, [messages])
    return  (
        <div className = "form">  
         {messages.map((item, index) => (
            <div className = "textMessage" key={index}>{item.author} - {item.text}</div>
          ))}
          <input className = "inputText"  onChange={(event) => {handlePress(event.target.value)}}/>
          <button className = "button" onClick={()=>plusMessage('User',textInput)}>Send</button>
          <button className = "button" onClick={()=>clear()}>Clear</button>
        </div>    
        );
}


   
