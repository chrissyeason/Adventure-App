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
    //     window.scrollTo(0,document.body.scrollHeight) 
    //     // let message = document.getElementById('message-box')  
    //     // .animate({
    //     //     scrollTop: message.get(0).scrollHeight
    //     // }, 1000);
    //     // })
    document.querySelector('#send-button').scrollIntoView({
        behavior: 'smooth'
    });
    }
    // const scrollSki = () =>{
    //     $('#messages').animate({
    //       scrollTop: $('#messages').get(0).scrollHeight
    //     }, 1000);
    //   };
    
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