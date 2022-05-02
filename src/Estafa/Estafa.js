import React, { Component } from 'react';
import './Estafa.css';

class Estafa extends Component {
    constructor() {
        super();

        //Initial State
        this.state = {
            alert: {
                type: '',
                message: '',
            }, 
        };
    }

    render(){
        return(
        <div className="Estafa">
            <div className="Title"><h2>¡Compra Crypto Coins!</h2></div>
        </div>
        )
    }
}

export default Estafa;