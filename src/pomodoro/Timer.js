import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
    constructor() {
        super();

        //Initial State
        this.state = {
            alert: {
                type: '',
                message: '',
            }, 

            time: 0,
            paused: false,
            started: false
        };

        this.times = {
            defaultTime: 1500, //25 min
            shortBreak: 300,   //5 min 
            longBreak: 900,    //15 min  
        };

    }

    componentDidMount() { 
        //Establece tiempo por defecto cuando el componente sea montado
        this.setDefaultTime()

    }

    setDefaultTime() {
        this.setState({
            time: this.times.defaultTime 
        })
    }
    //Buttons
    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'WORKING!'
            },
            started: true
        })

        this.setTime(this.times.defaultTime);
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a Short Break!'
            },
            started: true
        });

        this.setTime(this.times.shortBreak);
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking a Long Break!'
            },
            started: true
        });

        this.setTime(this.times.longBreak);
    }
      
    setTime = (newTime) => {

        this.restartInterval();
        this.setState({
            time: newTime
        })
    }

    restartInterval = () => {
        clearInterval(this.interval);
        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        if(this.state.time === 0){
            this.setState({
                alert: {
                    type: 'beep',
                    message: 'Beeeeeeeeeeeeeeeeeeeeeep'
                }
            });
        }
        else if(!this.state.paused && this.state.started){
            this.setState({
                 time: this.state.time - 1
            });
        }
    }
    
    displayTimer = (seconds) => {
        let minutes= Math.trunc(seconds / 60);
        let newSeconds = seconds - (minutes * 60);

        if(minutes < 10 && newSeconds < 10){
            return `0${minutes}:0${newSeconds}`;
        }
        else if(minutes < 10 && newSeconds >= 10){
            return `0${minutes}:${newSeconds}`;
        }
        else if(minutes >= 10 && newSeconds < 10){
            return `${minutes}:0${newSeconds}`;
        }
        else{
            return `${minutes}:${newSeconds}`;
        }
    }

    Pause = () => {
        this.setState({ 
            paused: !this.state.paused,
        })
    }

    Stop = () => {
        this.setState({ 
            paused: false,
            started: false,
            alert: {
                message: '',
                type: '',
            }
        })
        this.setDefaultTime();
    }

    render() {

        const {alert: {message, type}, time} = this.state;
        return (
            <div className = "Pomodoro">
                <div className = {`alert ${type}`}>
                    {message}
                </div>

                <div className = "timer">
                    {this.displayTimer(time)}
                </div>

                <div className = "types">
                    <button
                        className = "start"
                        onClick={this.setTimeForWork}
                    >
                        Start Working
                    </button>
                    <button
                        className = "short"
                        onClick={this.setTimeForShortBreak}
                    >
                        Short Break
                    </button>
                    <button
                        className = "long"
                        onClick={this.setTimeForLongBreak}
                    >
                        Long Break
                    </button>
                </div>

                <div hidden = {!this.state.started}>
                    <button
                    className = {this.state.paused? 'play':'pause'}
                        onClick={this.Pause}
                    >
                        <i className = {this.state.paused? 'fa fa-play':'fa fa-pause'}></i>
                    </button>

                    <button
                        onClick={this.Stop}
                    >
                        <i className = 'fa fa-stop'></i>
                    </button>
                </div>                
            </div>
        );
    }
}

export default Timer;