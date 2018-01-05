import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import '../css/style.css';

export default class Footer extends Component{
    render(){
        return (
            <footer id="footer" >
            <p id="content">Created by Team CryptX</p>
            </footer>
        )
    }
}