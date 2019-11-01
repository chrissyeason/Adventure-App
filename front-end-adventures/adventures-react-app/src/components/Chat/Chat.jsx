import React, {Component} from 'react';
import './Chat.css';
import Messages from '../Chat/Messages';
import io from 'socket.io-client';
import $ from 'jquery';

class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            message: '',
            room: '',
            messages: [],
        };

    // socket listening
    this.socket = io('localhost:9000');

    this.socket.on('RECEIVE_MESSAGE', function(data){
        addMessage(data); 
        console.log(data, "this is data from socket.on function")
    });
    
    // catches the emit from the server and adds it to the messages array
    const addMessage = (data) => {
        if(data.message !== ''){
        console.log(data, "this is data from add message function");
        this.setState({
            messages: [...this.state.messages, data]
        });
        console.log(this.state.messages, "this is add message function");
        
        };
    }
    
    
    this.joinRoom = (e) =>{
        console.log('joinRoom function here', this.state.room)
        this.socket.emit('joinRoom', this.state.room)
    }
    // sends the message to the server every time you click 'send'
    this.sendMessage = (e) => {
        e.preventDefault();
        console.log("this si send message")
        this.socket.emit('SEND_MESSAGE', {
            username: this.props.username,
            message: this.state.message,
            room: this.state.room,
        });
        this.setState({message: ''});
        postMessage({
            username: this.props.username,
            message: this.state.message,
            room: this.state.room,
        })
        document.getElementById('textContent').value=''
        this.scrollToBottom();
        e.target.classList.add('setCurrentUserStyle');
    }
     const postMessage = async (data) => {
        // let room = data.room
        console.log(data, "this is data from post req" )
        try{
            const newMessage = await fetch('http://localhost:9000/chat', {
                method: 'POST',
                body: JSON.stringify(data),
                credentials: 'include',
                headers: {
                    "Content-Type" : "application/json"
                }
            })
            const parsedResponse = await newMessage.json();
            console.log(parsedResponse, 'this is response from message req');
        }catch(err){
            console.log(err)
        }
    }
}
componentDidMount(){
    this.setState({
        room: 'chat',
    })
}
scrollToBottom = () => {
    document.querySelector('#send-button').scrollIntoView({
        behavior: 'smooth'
    });
}
// get route makes a fetch request
getMessages = async () => {
    let room = this.state.room
    console.log(room)
      try{
          const messages = await fetch(`http://localhost:9000/chat/${room}`);
          const parsedResponse = await messages.json();
          if(parsedResponse.status.code === 200){
              console.log("this is parsedResponse", parsedResponse)
              this.setState({
                  messages: parsedResponse.data
              })
              console.log(parsedResponse.data)
          }
      }catch(err){
          console.log(err)
      }
  }
//   sets the room state when button is clicked and calls the fetch request
  selectRoom = (e) =>{
    //   set state of room to value of name
    this.setState({
        room: e.target.name,
    }, ()=> {
        this.joinRoom();
        this.getMessages();
        this.scrollToBottom();
    })
  }
//   messages = this.state.messages.map = ((message, i)=> {
//     const key = `message-${i}`;
//     <li key={key}>value= {message.user} : {message.message}</li>                              
//   })
  
  render(){
    return(
        <div className="chat-container">
            {
                this.props.loggedIn ?
            <aside>
                <button name="hiking" onClick={this.selectRoom}>hiking</button>
                
                <button name="camping" onClick={this.selectRoom}>camping</button>
                
                <button name="climbing" onClick={this.selectRoom}>climbing</button>
            </aside> :
            ''
            }
            <div className="messages-container">               
                    <div id="messages">
                            <Messages messages={this.state.messages} room={this.state.room} username={this.props.username}/>
                        
                    </div>
                    
                    <div className="chat-footer">
                        <hr/>
                        <input id="textContent" type="text" placeholder="Message" onChange={e => this.setState({message: e.target.value})} className="form-control" />
                        
                        <button onClick={this.sendMessage} id="send-button">Send</button>
                    </div>
            </div>     
        </div>                   
    )
}
}


export default Chat;