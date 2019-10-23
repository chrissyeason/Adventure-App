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
        this.socket = io('localhost:9000');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });
        
        const addMessage = (data) => {
            console.log(data);
            this.setState({
                messages: [...this.state.messages, data]
            });
            console.log(this.state.messages);
        };

        this.sendMessage = (e) => {
            e.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                username: this.props.username,
                message: this.state.message
            });
            this.setState({message: ''});
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