import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import List from './components/list'


ReactDOM.render(
    <React.Fragment>
        <Header/>
        <List/>
    </React.Fragment>
    , document.getElementById('root')
);

reportWebVitals();
