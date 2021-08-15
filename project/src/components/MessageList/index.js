import React from 'react';
import './style.scss';
import {AddMessage} from "../../hooks/AddMessage";
import {BotSend} from "../../hooks/BotMessage";
import {Button} from "../Button"
import {Input} from "../Input"


export function MessageList() {
    const [messages,textInput, {plusMessage,clear,handlePress}] = AddMessage();
    
       
       
    BotSend(messages, plusMessage)
        
    return  (
        <div className = "form">  
         {messages.map((item, index) => (
            <div className = "textMessage" key={index}>{item.author} - {item.text}</div>
          ))}
          <Input  func={(event) => {handlePress(event.target.value)}}/>
          <Button text="Send" func={()=>plusMessage('User',textInput)}/>
          <Button text="Clear" func={()=>clear()}/>
          
        </div>    
        );
}


   
