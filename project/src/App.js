import { Message } from "./components/Message"
import { MessageList } from "./components/MessageList"
import { ChatList } from "./components/ChatList"


export const App = () => {
  return (
    <div >
      <Message name="Kirill Neznanov" discipline="React"> </Message>
      <MessageList />
      <ChatList />

    </div>
  );
}



