import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'configStore';
import App from 'App';
const store = configureStore();

export default class Root extends Component{

    /**
     * Render redux-devtools
     *
     * @return {JSX} Render <DebugPanel />
     */
    renderDevTools(){
        if(__DEBUG__){
            const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');

            return (
                <DebugPanel top left bottom>
                    <DevTools store={ store } monitor={ LogMonitor } />
                </DebugPanel>
            );
        }
    }



    /**
     * Render
     *
     * @return {JSX} Render <Provider /> component
     */
    render(){
        return (
            <div>
                <Provider store={ store }>
                    <App />
                </Provider>
                { this.renderDevTools() }
            </div>
        );
    }
}
