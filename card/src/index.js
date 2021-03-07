import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import List from './components/list'
import ListItem from './components/list-items';



ReactDOM.render(
    <React.Fragment>
        <Header/>
        <List/>
        <ListItem/>
    </React.Fragment>
    , document.getElementById('root')
);

reportWebVitals();
