import React, {Component} from 'react';
import './Chat.css';
import Hiking from '../Chat/rooms/Hiking';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch, useParams } from "react-router-dom";
import io from 'socket.io-client';

class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: this.props.username,
            message: '',
            room: '',
            messages: []
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

    // sends the message to the server every time you click 'send'
    this.sendMessage = (e) => {
        e.preventDefault();
        console.log("this si send message")
        this.socket.emit('SEND_MESSAGE', {
            user: this.props.username,
            message: this.state.message,
            room: this.state.room,
        });
        this.setState({message: ''});
        postMessage({
            user: this.props.username,
            message: this.state.message,
            room: this.state.room,
        })
    }
     const postMessage = async (data) => {
        let room = data.room
        console.log(data, "this is data from post req" )
        try{
            const newMessage = await fetch(`http://localhost:9000/chat/${room}`, {
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
// componentDidMount(){
//     this.getMessages(room);
//     console.log("messages container componentDidMount")
// }

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
        room: e.target.name
    })
    this.getMessages();
  }
  render(){
    return(
        <div>
            {
                this.props.loggedIn ?
            <div>
                <button name="hiking" onClick={this.selectRoom}>hiking</button>
                <button name="camping" onClick={this.selectRoom}>camping</button>
                <button name="climbing" onClick={this.selectRoom}>climbing</button>
            </div> :
            ''
            }
            <div className="container">               
                    <div className="messages">
                        {this.state.messages.map(function(message, i){
                            const key = `message-${i}`;
                            return(
                                <div key={key}>{message.username} : {message.message}</div>
                            )
                        })}
                    </div>
                
                    <div className="chat-footer">
                        <hr/>
                        <input type="text" placeholder="Message" value={this.state.message} onChange={e => this.setState({message: e.target.value})} className="form-control" required/>
                        <br/>
                        <button onClick={this.sendMessage} className="send-button">Send</button>
                    </div>
            </div>     
        </div>                   
    )
}
}


export default Chat;