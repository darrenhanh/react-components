/**
 * Created by darren on 2017/2/28 0028.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import routes from './routes';
import rootReducer from './redux/rootReducer'

const store=createStore(rootReducer)
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <div>
            {routes(history)}
        </div>
    </Provider>
), document.getElementById('root'));
