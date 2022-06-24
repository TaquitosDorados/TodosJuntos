import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Person.css';
import './popup.css';


 class Person extends Component {
    constructor(){
        super();

        //initialState
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: {
                name: false,
                last: false
            },
            open: false,
        };
    }

    handleOnChange = e => {
        const {target: {value,name}} = e;
        
        this.setState({
            [name]: value
        })
        console.log(value) 
    }

    handleOnSubmit = e => {
        e.preventDefault();
        
        const{name,email,phone, message} = this.state;
        this.setState({
            
        })

        this.setState({
            errors:{
                name: name.trim() === '',
            }
        })

        if(name)
        {
            const data = {
                name, 
                email, 
                phone,
                message
            };

            this.setState({
                open: true
            })
            console.log('Data: ', data);
        }
        
        setTimeout(() => {
            this.setState({
                errors:{
                    name: false,
                },
            }) 
        }, 3000)

    }

  render() {
    return (
        <div className="Person">
            <Popup open={this.state.open} modal nested>
            {close => (
                <div className="modal">
                <button className="close" onClick={() => {
                                    this.setState({
                                        open: false
                                    })
                                    close();
                                }}>
                    &times;
                </button>
                    <div className="header"> <h1>Data</h1> </div>
                        <div className="content">
                            <h4>First Name: <span>{this.state.name}</span></h4>
                            <h4>Email: <span>{this.state.email}</span></h4>
                            <h4>Phone: <span>{this.state.phone}</span></h4>
                            <h4>Message: <span>{this.state.message}</span></h4>
                        </div>
                    </div>
                )}
            </Popup>
            <form onSubmit={this.handleOnSubmit}>
                <label><strong>Name: </strong> 
                    <input 
                        type="text" 
                        name="name" 
                        value = {this.state.name}
                        onChange={this.handleOnChange}
                        className={
                            this.state.errors.name ? 'error': ''
                        }
                        />
                    {
                        this.state.errors.name
                        && 
                        <div className= 'errorMessage'>Required name</div>
                    } 
                </label>    
                <br/>
                <label> <strong>Email: </strong>
                    <input 
                        type="email" 
                        placeholder="pablo@correo.com" 
                        name="email" 
                        value = {this.state.email}
                        onChange={this.handleOnChange}
                        required
                    />
                </label>
                <br/>
                <label> <strong>Phone: </strong>
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="+5212346789" 
                        value = {this.state.phone}
                        onChange={this.handleOnChange}
                        />
                </label>
                <br/>
                <label> <strong>Message: </strong>
                    <input 
                        type="text" 
                        name="message" 
                        placeholder="Lorem Ipsum" 
                        value = {this.state.message}
                        onChange={this.handleOnChange}
                        />
                </label>  
                <br/> 
                <button type='submit'>Guardar informacion</button>
            </form>
          
        </div>
    )
  }
}

export default Person;