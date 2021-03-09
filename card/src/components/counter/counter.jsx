import React, { Component } from 'react';
import "./style.css";

class Counter extends Component {
    state = { 
        count : 1
     }

    render() { 
        return ( 
            <div>
                <div className = "counter">{this.state.count}</div>
                <button className = "minus">-</button>
                <button className="plus">+</button>
            </div>
         );
    }
}
 
export default Counter;