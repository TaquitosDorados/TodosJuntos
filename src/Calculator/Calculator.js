import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            n1: 0,
            n2: 0,
            operator: '+',
            result: 0
        }
    }

    handleOnChange1 = e => {
        const {target:{value}} = e;

        if(value.trim()>=0){
            this.setState({
             n1: value,
            })
        }
    }

    handleOnChange2 = e => {
        const {target:{value}} = e;

        if(value.trim()>=0){
            this.setState({
             n2: value,
            })
        }
    }

    handleOnChangeOperator = e => {
        const {target:{value}} = e;

        this.setState({
            operator: value,
        })
    }

    handleOnClick = () => {
        switch (this.state.operator) {
            case '+':
                this.setState({
                    result: Suma(this.state.n1, this.state.n2)
                })
                break;
            case '-':
                this.setState({
                    result: Resta(this.state.n1, this.state.n2)
                })
                break;
            case '*':
                this.setState({
                    result: Multiplicacion(this.state.n1, this.state.n2)
                })
                break;
            case '/':
                this.setState({
                    result: Division(this.state.n1, this.state.n2)
                })
                break;
        }
    }

    render() {
        return (
            <div className="calculadora">
                <input className = "boxes" type="number" value={this.state.n1} onChange={this.handleOnChange1}></input>
                <select className = "boxes" onChange={this.handleOnChangeOperator}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input className = "boxes" type="number" value={this.state.n2} onChange={this.handleOnChange2}></input>
                <p className ="result">= {this.state.result}</p>
                <button className="button"onClick={this.handleOnClick}>Calcular</button>
            </div>
        );
    }
}

function Suma(n1_,n2_){
    return (parseInt(n1_) + parseInt(n2_));
}
function Resta(n1_,n2_){
    return (n1_ - n2_);
}
function Multiplicacion(n1_,n2_){
    return (n1_ * n2_);
}
function Division(n1_,n2_){
    return (n1_ / n2_);
}

export default Calculator;