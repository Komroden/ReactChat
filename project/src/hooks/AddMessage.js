import { useState, } from "react";
export const AddMessage = () => {
  const [textInput, setTextInput] = useState('');
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

    })

  }
  const clear = () => {
    setMessages([]);
  }
  const handlePress = (text) => {
    setTextInput(text)
  }

  return [
    messages, textInput,
    {
      plusMessage,
      clear,
      handlePress
    }
  ]
};
