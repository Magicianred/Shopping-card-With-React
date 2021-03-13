import React, { Component } from 'react';
import "./style.css";

class Counter extends Component {
    state = { 
        count : 0
     }

     plusFunction = () =>{
         this.setState({ count: this.state.count + 1});
     }

     minusFunction = () =>{
         if(this.state.count===0) return ;
         this.setState({ count: this.state.count - 1})
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