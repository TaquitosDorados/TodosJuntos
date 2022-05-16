import React, { Component } from 'react';

class Numbers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            numberList: []
        }
    }

    handleOnChange = e => {
        const{target:{value}} = e;

        if(value.trim()>=0){
            this.setState({
             number: value,
            })
        }

        const array = value.toString().split("");
        let newNum = 0;

        array.map((x) => 
            
               { 
                   newNum+=parseInt(x);
                }
        );
        
        console.log(newNum);

        this.setState({
            numberList: [
                ...this.state.numberList,
                {
                    num: newNum,
                }
            ]
        })
    }


    render() {
        return (
            <div>
                <input type="number" value={this.state.number} onChange={this.handleOnChange}></input>

                <ul>
                    {
                        this.state.numberList.map((number, key) => 
                            <li key={key}>
                                {number.num}
                            </li>
                        )
                        }
                </ul>
            </div>
        );
    }
}


function addToList(a, b){
    a+=b;
    this.setState({
        numberList:[
            ...this.state.numberList,
            {
                num: a,
            }
        ]
    });
   return (a);
}

export default Numbers;