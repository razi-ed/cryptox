import React from 'react';
import {render} from 'react-dom';
import '../css/style.css';
import App from '../components/App';


if (module.hot) {
    module.hot.accept(App, ()=>{
        render(<App/>,
        document.getElementById('app')
        );
    });
};

render(<App />, document.getElementById('app'));
