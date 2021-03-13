import React, { Component } from 'react';
import Counter from '../counter';
import './style.css';

class All extends Component {

    constructor(props){
        super(props)
           this.state = {
            count: 0,
            all: 0
           }
        }
  
    render() { 
        return (
            <div className="all">
                <h3>All products</h3>
               <Counter style = {{display: "none"}}>{this.props.all}</Counter>                
                <button className="reset" onClick={() => window.location.reload(false)}>Reset</button>
            </div>
        )
    }
}
 
export default All;