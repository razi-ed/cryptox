import React from 'react';
import {render} from 'react-dom';
import '../css/style.css';
import '../css/exchange.scss';
import '../css/dashboard.css';
import App from '../components/App';

import Store from '../js/redux/store';
import {Provider} from 'react-redux';

console.log(Store);


if (module.hot) {
    module.hot.accept(App, ()=>{
        render(<App/>,
        document.getElementById('app')
        );
    });
};

render( <Provider store={Store}>
            <App />
        </Provider>
    , document.getElementById('app'));
