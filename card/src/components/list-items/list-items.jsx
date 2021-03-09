import React, { Component } from 'react';
import MinusButton from '../minus-button';
import PlusButton from '../plus-button';
import Counter from '../counter';
import car1 from './img/car1.jpg';
import car2 from './img/car2.jpg';
import car3 from './img/car3.jpg';
import './style.css';

class ListItem extends Component {

    render() { 
        return (
            <div>
                <li>
                <img src = {car1}/>
                <Counter/>
                <PlusButton/>    
                <MinusButton/></li>
                <li>
                <img src = {car2}/>
                <Counter/>
                <PlusButton/>
                <MinusButton/></li>
                <li>
                <img src = {car3}/>
                <Counter/>
                <PlusButton/>
                <MinusButton/></li>
            </div>
        );
    }
}
 
export default ListItem;
