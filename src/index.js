import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Counter from './Counter.js';
import reducer from './reducer.js';

const store = createStore(reducer);

const render = () =>
    ReactDOM.render(
        <Provider store={store}>
            <Counter />
        </Provider>,
        document.getElementById('root')
    );

render();
store.subscribe(render);