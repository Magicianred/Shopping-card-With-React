import React, { Component } from 'react';
import Counter from '../counter';
import car1 from './img/car1.jpg';
import car2 from './img/car2.jpg';
import car3 from './img/car3.jpg';
import './style.css';

let imageStyle1 = {
    backgroundImage: `url(${car1})`,
    width: "400px",
    height: "300px",
}

let imageStyle2 = {
    backgroundImage: `url(${car2})`,
    width: "400px",
    height: "300px",
}

let imageStyle3 = {
    backgroundImage: `url(${car3})`,
    width: "400px",
    height: "300px",
}

class ListItem extends Component {

    render() { 

        return (
            <div>
            
                <li key = {1}>
                    <div className="images" style={imageStyle1}></div>
                    <Counter/>
                </li>

                <li key = {2}>
                    <div className="images" style={imageStyle2}></div>
                    <Counter/>
                </li>

                <li key = {3}>
                   <div className="images" style={imageStyle3}></div>
                    <Counter/>
                </li>
            </div>
        );
    }
}
 
export default ListItem;
