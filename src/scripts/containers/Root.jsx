import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from 'App';
import configureStore from 'configStore';
const store = configureStore();

export default class Root extends Component{

    /**
     * _renderDevTools()
     *
     * @return {jsx}
     */
    _renderDevTools(){
        if(__DEBUG__){
            const DevTools = require('./DevTools');
            return ( <DevTools /> );
        }
    }



    /**
     * render()
     *
     * @return {jsx}t
     */
    render(){
        return (
            <div>
                <Provider store={ store }>
                    <div>
                        <App />
                        { this._renderDevTools() }
                    </div>
                </Provider>
            </div>
        );
    }
}
