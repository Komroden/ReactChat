import React,{useState,useEffect} from 'react';


export function MessageList() {
    const [textInput, setTextInput] = useState('');
    const [messages, setMessages] = useState([ 
        
    ]);
    const addMessage = (author, text) => {
        setMessages([ 
                   ...messages, 
                   { 
                     author, 
                     text, 
                   } 
                 ]); 
                 
       }
       const clear = () => {
        setMessages([]); 
       }
       const handlePress = (text) => {
        setTextInput(text)
      }
      useEffect(() => { 
        if (messages.slice(-1)?.author !== 'Bot') {
          addMessage('Bot', "Hello!"); 
  }
        }, [messages])
    return  (
        <div>  
         {messages.map((item, index) => (
            <div key={index}>{item.author} - {item.text}</div>
          ))}
          <input value={textInput} onChange={(event) => {handlePress(event.target.value)}}/>
          <button onClick={()=>addMessage('User', textInput)}>Send</button>
          <button onClick={()=>clear()}>Clear</button>
        </div>    
        );
}


   
