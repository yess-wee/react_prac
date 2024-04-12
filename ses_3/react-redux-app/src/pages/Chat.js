import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'
import { sendMessage } from './chat/actions'

const Chat = ({loggedInUsers, chatMessages, sendMessage}) =>{
    const [sender,setSender] = useState("")
    const [message,setMessage] = useState("")

    const handleSendMessage = ()=>{
        if(message && loggedInUsers.includes(sender) > 0){
            sendMessage(sender,message)
            setMessage("")
        }
    }

    return (
        <>
            <h2>Chat Playground</h2>
    
            <div>
                {chatMessages.map((msg,index)=>(
                    <p key={index}>
                        <strong>{msg.sender}: </strong> {msg.message}
                    </p>
                ))}
            </div>
    
            <input
                type='text'
                placeholder='Type the name of the sender'
                value={sender}
                onChange={(e)=>setSender(e.target.value)}/>
    
            {" "}
    
            <input
                type='text'
                placeholder='Enter your message'
                value={message}
                onChange={(e)=> setMessage(e.target.value)}/>
    
            {" "}
    
            <button
                onChange={handleSendMessage}
                disabled={!sender || !message}>
                    Send Message
                </button>
        </>
    )
}


const mapStateToProps = (state)=> ({
    loggedInUsers: state.loggedInUsers,
    chatMessages:state.chatMessages,
})

const mapDispatchToProps = (dispatch)=> ({
    sendMessage: (sender,message) => dispatch(sendMessage(sender,message)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Chat)

