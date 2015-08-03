import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'middlewares/promiseMiddleware';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import * as reducers from 'reducers/';
import PumgranaApp from 'PumgranaApp';

const cs = compose(devTools(), createStore);
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(cs);
const store = createStoreWithMiddleware(combineReducers(reducers));

export default class App extends Component{

    /**
     * Render
     *
     * @return JSX
     */
    _renderDevTools(){
        return (
            <DebugPanel top left bottom>
                <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
        )
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        return (
            <div>
                <Provider store={store}>
                    {() =>
                        <PumgranaApp />
                    }
                </Provider>
                { }
            </div>
        )
    }
}
