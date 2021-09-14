import React from 'react';
import './style.scss';
import {BrowserRouter as Link} from "react-router-dom";
export const MessageExampleTextIDs = {
    title: 'MessageExample_title',
}

export const Message=(message)=>{
    return  (

        <div className="message">
            <div>
                <Link to="/signup">Sign Up</Link>
            </div>
          <header className="message-header">
            <h1 data-testid={MessageExampleTextIDs.title}>Hello,my name is: {message.name}</h1>
            <h2>I am learning <span className="discipline">{message.discipline}</span></h2>
          </header>
        </div>
      );
}