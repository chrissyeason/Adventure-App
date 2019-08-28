import React, {Component} from 'react';

class Adventures extends Component {
    constructor(){
        super();
        this.state = {
            adventures: []
        }
    }
    render(){
        return(
            <div>
                <h1>this is adventure component</h1>
            </div>
        )
    }
}

export default Adventures;
