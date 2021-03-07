import React, { Component } from 'react';
import MinusButton from '../minus-button';
import PlusButton from '../plus-button';
import './style.css';

class ListItem extends Component {
    render() { 
        return (
            <div>
                <li>text
                <PlusButton/><MinusButton/></li>
                <li>text
                <PlusButton/><MinusButton/></li>
                <li>text
                <PlusButton/><MinusButton/></li>
            </div>
        );
    }
}
 
export default ListItem;
