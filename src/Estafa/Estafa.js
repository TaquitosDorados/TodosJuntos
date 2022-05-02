import React, { Component } from 'react';
import './Estafa.css';

class Estafa extends Component {
    constructor() {
        super();

        //Initial State
        this.state = {
            alert: {
                type: '',
                message: 'Solo valores multiplos de 10!',
            }, 
            crypto: 0,
            dolar: 0,
        };   
    }

    handleOnChange = e => {
        const{target:{value}} = e;
        console.log(value);
    
        if(value.trim()>=0){
            this.setState({
             dolar: value,
            })

            if(value.trim()%10==0){
                const newCrypto = value/10;
                this.setState({
                    crypto: newCrypto,
                    alert: {
                        type: 'valid',
                        message: `Puedes comprar ${value/10} monedas`,
                    }
                   })
            } else {
                this.setState({
                    alert: {
                        type: 'invalid',
                        message: 'Solo valores multiplos de 10!',
                    }
                   })
            }
        }
    }

    render(){
        const {alert: {message, type}, dolar} = this.state;
        return(
        <div className="Estafa">
            <div className="Title">¡Compra Crypto Coins!</div>
            <div className="Title2">Dolares a Invertir</div>
            <input type="number" value={dolar} onChange={this.handleOnChange}></input>

            <div className="Title2">Precio de CryptoMoneda: $10</div>
            <div className={`alert ${type}`}>{message}</div>
        </div>
        )
    }
}

export default Estafa;