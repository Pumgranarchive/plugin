import React, {Component} from 'react';
import {createRedux} from 'redux';
import {Provider} from 'react-redux';
import * as stores from 'stores/';
import PumgranaApp from 'PumgranaApp';

const redux = createRedux(stores);

export default class App{

    /**
     * Render
     *
     * @return JSX
     */
    render(){
        return(
            <Provider redux={redux}>
                {() =>
                    <PumgranaApp />
                }
            </Provider>
        )
    }
    
}
