import { useEffect } from "react"
function ChatMessageSenderComponent(props) {
    useEffect(()=>{
        console.log('hi',props.message)
    },[]);
    return (
        <div data-time={props.message.time} key={props.message.time} className="chat-message sender">
            <div className="chat-face" />
            <p>{props.message.message}</p>
        </div>
    )
}

export default ChatMessageSenderComponent