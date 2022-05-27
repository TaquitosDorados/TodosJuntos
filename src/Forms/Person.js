import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Person.css'

class Person extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: '',
            lName: '',
            email: '',
            phone: '',
        }
    }

    handleOnChange = e => {
        const {target:{value,id}} = e;
        this.setState({[id]: value});

    }

    handleSubmit = e => {
        e.preventDefault();
        const {fname, lName, email, phone} = this.state;

        const data = {
            fname,
            lName,
            email,
            phone
        };

    }

    render() {
        return (
            <div className = 'person'>
                <form onsubmit={this.handleSubmit}>
                    <p>Name</p>
                    <input type="text" value={this.state.name} id='fname' onChange={this.handleOnChange} ></input>
                    <p>Last Name</p>
                    <input type="text" value={this.state.lName} id='lName' onChange={this.handleOnChange} ></input>
                    <p>Email</p>
                    <input type="email" value={this.state.email} id='email' onChange={this.handleOnChange} ></input>
                    <p>Phone</p>
                    <input type="tel" value={this.state.phone} id='phone' onChange={this.handleOnChange} ></input>
                    <br></br>
                    <input className= 'button' type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
export default Person;