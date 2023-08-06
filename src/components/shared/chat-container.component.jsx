import ChatInputContainerComponent from "./chat-input-container.component"
import ChatMessageReceiverComponent from "./chat-message-receiver.component"
import ChatMessageSenderComponent from "./chat-message-sender.component"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function ChatContainerComponent() {
  const [messages, setMessages] = useState([]);
  const state = useSelector((state) => state);
  useEffect(() => {console.log(state.chat.data);
    setMessages([...messages, state.chat.data]);
  }, [state.chat.data]);
  return (
    <div key="chat-container" className="chat-container">
      <div key="chat" className="chat">
        {
          messages.map((message) => {
            return (
              <>
                {message.type == 'sender' && (<ChatMessageSenderComponent message={message}></ChatMessageSenderComponent>)}
                {message.type == 'receiver' && (<ChatMessageReceiverComponent message={message}></ChatMessageReceiverComponent>)}
              </>
            )
          })
        }
      </div>
      <ChatInputContainerComponent></ChatInputContainerComponent>
    </div>
  )
}

export default ChatContainerComponent