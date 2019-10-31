import React, {Component} from 'react';
import './Messages.css';

class Messages extends Component{
    constructor(props){
        super(props);
    }
    renderMessages(){
        let messages = []
        this.props.messages.map(function(message, i){  
            const key = `message-${i}`; 
            messages.push(<li key={key}>{message.username} : {message.message}</li>)                               
        })
        return [...messages]
    }
    componentDidUpdate(){
        this.scrollToBottom();
    }
    scrollToBottom = () => {
        window.scrollTo(0,document.body.scrollHeight)   
    }
    
render(){
    return(
        <div id="message-box">
            <h1>messages component</h1>
            <ul >
                {this.renderMessages()}
            </ul>
        </div>
    )
}
}


export default Messages;