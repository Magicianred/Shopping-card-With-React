import React, { Component } from 'react';
import PlusButton from '../buttons';
import './style.css';

class ListItem extends Component {
    render() { 
        return (
            <div>
                <li>text
                <PlusButton/></li>
                <li>text
                <PlusButton/></li>
                <li>text
                <PlusButton/></li>
            </div>
        );
    }
}
 
export default ListItem;
