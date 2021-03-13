import React, { Component } from 'react';
import './style.css';

class All extends Component {

    state = {
        count : this.props.count
    }
              
    render() { 
        return ( 
            <div className="all">
                <h3>All products</h3>
                <button className="reset" onClick={() => window.location.reload(false)}>Reset</button>
            </div>
        );
    }
}
 
export default All;