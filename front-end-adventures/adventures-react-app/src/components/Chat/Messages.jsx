import React, {Component} from 'react';
import './Messages.css';

class Messages extends Component{
    constructor(props){
        super(props);
    }
    renderMessages(){
        let messages = []
        let currentUser = this.props.username
        this.props.messages.map(function(message, i){  
            const key = `message-${i}`; 
            messages.push(<li key={key} className="message-li">{message.username} : {message.message}</li>)  
            // if(currentUser === message.username){
            //     messages.push(<li key={key}>{message.username} : {message.message}</li>)
            //     return [...messages];
            // }  else{
            //     messages.push(<li key={key}>{message.username} : {message.message}</li>)
            //     return [...messages]
            // }                           
        })
        return [...messages]
    }
    // setCurrentUserStyle =(string)=> {
    //     console.log(message, 'this is current user message')
    // }
    componentDidUpdate(){
        this.scrollToBottom();
        // this.setCurrentUserStyle();
    }
    scrollToBottom = () => {
    document.querySelector('#send-button').scrollIntoView({
        behavior: 'smooth'
    });
    }
render(){
    return(
        <div id="message-box">
            <h4>{this.props.room} room</h4>
            <ul >
                {this.renderMessages()}
            </ul>
        </div>
    )
}
}


export default Messages;