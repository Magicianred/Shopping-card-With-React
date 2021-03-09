import React, { Component } from 'react';
import './style.css';

class All extends Component {
              
    render() { 
        return ( 
            <div className="all">
                <h3>All products</h3>
                <h3></h3>
   
                <button className="reset" onClick={() => window.location.reload(false)}>Reset</button>
            </div>
        );
    }
}
 
export default All;