import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0
     }

    render() { 

        let newCount = this.count =1;
        return ( 
            <div className = "counter">
            {newCount}
            </div>
         );
    }
}
 
export default Counter;