import React, { Component } from 'react';
import Counter from '../counter'
import './style.css';

class All extends Component {


              
    render() { 
        return ( 
            <div className="all">
                <h3>All products</h3>
                <h1><Counter testProp = {this.props.count}/></h1>
                <button className="reset" onClick={() => window.location.reload(false)}>Reset</button>
            </div>
        );
    }
}
 
export default All;