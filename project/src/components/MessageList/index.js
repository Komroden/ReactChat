import React from 'react';
import './style.scss';
import { AddMessage } from "../../hooks/AddMessage";
import { BotSend } from "../../hooks/BotMessage";
import { Buttons } from "../Button"
import { Input } from "../Input"




export function MessageList({chatId,message}) {

  const [messages, textInput, { plusMessage, clear, handlePress }] = AddMessage();



  BotSend(messages, plusMessage)

  return (
    <div className="form">
      {messages.map((item, index) => (
        <div className="textMessage" key={index}>{item.author} - {item.text}</div>
      ))}
      <Input func={(event) => { handlePress(event.target.value) }} />
      <Buttons text="Send" func={() => plusMessage('User', textInput)} />
      <Buttons text="Clear" func={() => clear()} />

    </div>
  );
}






