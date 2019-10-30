import React from 'react';

function Messages(props){
    const allMessages = props.messages.map(function(message, i){  
        const key = `message-${i}`;                                
    return(
            <li key={key}>{message.user.user} : {message.message}</li>
    )
})
return(
    <div>
        <h1>messages component</h1>
        <ul>
            {allMessages}
        </ul>
    </div>
)
}

export default Messages;