import React, { Component } from 'react';
import Wrapper from 'Wrapper/';
import Footer from 'Footer/';
import ToogleButton from 'ToogleButton/';

export default class App extends Component{

    /**
     * State
     *
     */
    state = {
        stateToogle: 'close'
    }



    /**
     * Show view bookmarks
     *
     */
    showViewBookmarks() {
        console.log('show');
    }



    /**
     * Open || Close plugin
     *
     */
    tooglePlugin() {
        return this.setState({
            stateToogle: (this.state.stateToogle == 'open' ? 'close' : 'open')
        });
    }



    /**
     * Render
     *
     * @return JSX
     */
    render() {
        return (
            <Wrapper state={ this.state.stateToogle }>
                <ToogleButton
                    state={ this.state.stateToogle }
                    action={ ::this.tooglePlugin } />
                <Footer
                    showViewBookmarks={ ::this.showViewBookmarks }
                    stateViewBookmarks={ 'disabled' } />
            </Wrapper>
        );
    }

}
