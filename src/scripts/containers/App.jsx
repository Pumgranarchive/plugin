import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'middlewares/promiseMiddleware';
import * as reducers from 'reducers/';
import PumgranaApp from 'PumgranaApp';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

let cs = createStore;
if(__DEBUG__){
    cs = compose(require('redux-devtools').devTools(), createStore);
}
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(cs);
const store = createStoreWithMiddleware(combineReducers(reducers));

export default class App extends Component{

    /**
     * Render dev tools
     *
     * @return JSX
     */
    renderDevTools(){
        if(__DEBUG__){
            return (
                <DebugPanel top left bottom>
                    <DevTools store={ store } monitor={ LogMonitor } />
                </DebugPanel>
            );
        }
        return false;
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        return (
            <div>
                <Provider store={ store }>
                    {() =>
                        <PumgranaApp />
                    }
                </Provider>
                { this.renderDevTools() }
            </div>
        );
    }
}
