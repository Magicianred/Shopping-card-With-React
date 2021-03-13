import React, { Component } from 'react';
import "./style.css";

class Counter extends Component {
    constructor(props){
        super(props)
           this.state = {
            count: 0,
            all: 0
        }

    }

     plusFunction = () =>{
        this.setState(() => {
            return { count: this.state.count + 1}});
        this.setState(() => {return { all: this.state.all + 1}});
          console.log(this.state.all)
     }

     minusFunction = () =>{
         if(this.state.count===0) return ;
         this.setState({ count: this.state.count - 1});
         this.setState(() => { return { all: this.state.all - 1} });
         console.log(this.state.all)
    }

    render() {
        return (
            
            <div>
                <div className = "counter">{this.state.count}</div>
                <button onClick = {this.minusFunction} className = "minus">-</button>
                <button onClick = {this.plusFunction} className="plus">+</button>
            </div>
         );
    }
}

 
export default Counter;