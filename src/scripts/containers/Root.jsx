import { Component } from 'react';
import { Provider } from 'react-redux';
import App from 'App';
import configureStore from 'configStore';
const store = configureStore();

export default class Root extends Component{

    /**
     * Render Redux DevTools
     * component
     *
     * @return {jsx}
     */
    _renderDevTools(){
        if(__DEBUG__){
            const DevTools = require('./DevTools').default;
            return ( <DevTools /> );
        }
    }



    /**
     * Render the root component
     * with <Provider /<
     *
     * @return {jsx}
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
