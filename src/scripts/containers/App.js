import React, { Component } from 'react';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import * as stores from 'stores/';
import PumgranaApp from 'PumgranaApp';

const reducer = combineReducers(stores);
const store = createStore(reducer);

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
