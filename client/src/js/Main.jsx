import React from 'react';
import {render} from 'react-dom';
import '../css/style.css';
import '../css/exchange.scss';
import App from '../components/App';
import {Provider} from 'react-redux';
import Store, {History} from './redux/store';
import DevTools from '../../utils/DevTools';
if (module.hot) {
    module.hot.accept(App, ()=>{
        render(
        <Provider store={Store}>
        <div>
            <App/>
        
        </div>
        </Provider>
        ,
        document.getElementById('app')
        );
    });
};

render( <Provider store={Store}>
    <div>
    <App/>

</div>
</Provider>, document.getElementById('app'));
