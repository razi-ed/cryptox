<<<<<<< HEAD
import React from 'react';
import {render} from 'react-dom';
import App from '../components/App';
||||||| merged common ancestors
import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css'
import App from '../components/App'
=======
import React from 'react';
import {render} from 'react-dom';
import '../css/style.css';
import App from '../components/App';
>>>>>>> authentication

<<<<<<< HEAD
render( <App />, document.getElementById('app1'));
||||||| merged common ancestors
render( <App /> , document.getElementById('app1'));
=======

if (module.hot) {
    module.hot.accept(App, ()=>{
        render(<App/>,
        document.getElementById('app')
        );
    });
};

render(<App />, document.getElementById('app'));
>>>>>>> authentication
