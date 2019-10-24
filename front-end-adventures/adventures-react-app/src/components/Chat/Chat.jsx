import React, {Component} from 'react';
import io from 'socket.io-client';
import './Chat.css';

class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            message: '',
            messages: []
        };
        // socket listening
        this.socket = io('localhost:9000');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });
        
        // catches the emit from the server and adds it to the messages array
        const addMessage = (data) => {
            console.log(data);
            this.setState({
                messages: [...this.state.messages, data]
            });
            console.log(this.state.messages);
        };
    
        // sends the message to the server every time you click 'send'
        this.sendMessage = (e) => {
            e.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                username: this.props.username,
                message: this.state.message
            });
            this.setState({message: ''});
            postMessage({
                username: this.props.username,
                message: this.state.message,
            })
        }
         const postMessage = async (data) => {
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
        this.getMessages();
        console.log("messages container componentDidMount")
    }
  // get route makes a fetch request
    getMessages = async () => {
          try{
              const messages = await fetch('http://localhost:9000/chat');
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
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="Card">
                            <div className="card-body">
                                <div className="card-title">Cool Cat's Chat</div><button data-toggle="collapse" data-target=".collapse">show</button>
                                <hr/>
                                <div className="collapse">
                                    <div className="messages">
                                        {this.state.messages.map(function(message, i){
                                            const key = `message-${i}`;
                                            return(
                                                <div key={key}>{message.username} : {message.message}</div>
                                            )
                                        })}
                                    </div>
                                
                                    <div className="card-footer">
                        
                                        <input type="text" placeholder="Message" value={this.state.message} onChange={e => this.setState({message: e.target.value})} className="form-control"/>
                                        <br/>
                                        <button onClick={this.sendMessage} className="send-button">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat;