import React, { Component } from 'react';
import "./style.css";


class Header extends Component {

    render() { 
        return (
            <div className = "header">
                <h1 className = "title">My Shopping Cart</h1>
                <h4 className = "subTitle">by Faydn</h4>
            </div>
        );
    }
}
 
export default Header;