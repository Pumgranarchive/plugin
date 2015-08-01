import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as stores from 'stores/';
import PumgranaApp from 'PumgranaApp';
import promiseMiddleware from 'redux-promise';

const reducers = combineReducers(stores);
const store = createStore(reducers);
const storeWithMiddleware = applyMiddleware(promiseMiddleware)(store);

export default class App{

    /**
     * Render
     *
     * @return JSX
     */
    render(){
        return(
            <Provider store={store}>
                {() =>
                    <PumgranaApp />
                }
            </Provider>
        )
    }
}
