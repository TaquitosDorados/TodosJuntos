import React, { Component } from 'react';
import './Animation.css'
import Vivo from "../Images/gorilavivo.PNG";
import Muerto from "../Images/gorilamuerto.PNG";

class Animation extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            show: false,
        }
    }

    componentDidUpdate(newProps,newState){
        if(newState.show){
            //document.getElementById('fade').style = 'opacity: 1';
           document.getElementById('vivir').style = 'opacity: 1';
           document.getElementById('morir').style = 'opacity: 0';
        } else {
            //document.getElementById('fade').style = 'opacity: 0';
            document.getElementById('vivir').style = 'opacity: 0';
           document.getElementById('morir').style = 'opacity: 1';
        }
    }

    toggleCollapse = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render(){
        return(
            <div className="Animation">
                <button onClick={this.toggleCollapse}>
                    {this.state.show? 'Collapse' : 'Expand'}
                </button>
                <div
                    id='fade'
                    className={this.state.show? 'transition show' : 'transition'}
                >
                    Change Da World. My final message. Goodbye
                    <br></br>
                    <img src={Vivo} id='vivir' className={this.state.show? 'transition show' : 'transition'}/>
                    <img src={Muerto} id='morir' className={this.state.show? 'transition show' : 'transition'}/>
                </div>
            </div>
        );
    }
}

export default Animation;