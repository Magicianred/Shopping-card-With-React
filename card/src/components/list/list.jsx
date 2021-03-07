import React, { Component } from 'react';
import ListItem from '../list-items';
import './style.css';

class List extends Component {

    render() { 
        return ( 
            <div>
                <ul className="list">
                    {ListItem}
                </ul>
            </div>
         );
    }
}
 
export default List;