import React from 'react';
import {render} from 'react-dom';
import './css/style.css';
import './css/exchange.scss';
import App from './components/App';
import {Provider} from 'react-redux';
import Store from './store';

if (module.hot) {
    module.hot.accept(App, ()=>{
        render(
        <Provider store={Store}>
            <App/>
        </Provider>
        ,
        document.getElementById('app')
        );
    });
};

render( <Provider store={Store}>
    <App/>
</Provider>, document.getElementById('app1'));
