import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count : 0
     }
    render() { 
        return ( 
            <div className = "counter">
            {this.state.count}
            </div>
         );
    }
}
 
export default Counter;