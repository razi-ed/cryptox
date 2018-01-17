import React from 'react';
import {render} from 'react-dom';
import '../css/style.css';
import '../css/exchange.scss';
import App from '../components/App';

if (module.hot) {
    module.hot.accept(App, ()=>{
        render(<App/>,
        document.getElementById('app')
        );
    });
};

render(<App />, document.getElementById('app1'));
