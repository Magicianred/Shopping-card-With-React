import React, { Component } from 'react';
import MinusButton from '../minus-button';
import PlusButton from '../plus-button';
import car1 from './img/car1.jpg';
import car2 from './img/car2.jpg';
import car3 from './img/car3.jpg';
import './style.css';

class ListItem extends Component {

    render() { 
        return (
            <div>
                <li><img src = {car1}/>
                <PlusButton/><MinusButton/></li>
                <li><img src = {car2}/>
                <PlusButton/><MinusButton/></li>
                <li><img src = {car3}/>
                <PlusButton/><MinusButton/></li>
            </div>
        );
    }
}
 
export default ListItem;
