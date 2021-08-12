import React from 'react';
import './style.scss';
export const Message=(message)=>{
    return  (
        <div className="message">
          <header className="message-header">
            <h1>Hello,my name is: {message.name}</h1>
            <h2>I am learning <span className="discipline">{message.discipline}</span></h2>
          </header>
        </div>
      );
}