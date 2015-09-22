import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'configStore';
import PumgranaApp from 'PumgranaApp';
const store = configureStore();

export default class App extends Component{

    /**
     * Render dev tools
     *
     * @return JSX or false
     */
    renderDevTools(){
        if(__DEBUG__){
            const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');

            return (
                <DebugPanel top left bottom>
                    <DevTools store={ store } monitor={LogMonitor} />
                </DebugPanel>
            );
        }
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
                    <PumgranaApp />
                </Provider>
                { this.renderDevTools() }
            </div>
        );
    }
}
