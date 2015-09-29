import React, { Component } from 'react';
import Footer from 'Footer/';

export default class App extends Component{

    /**
     * Show view bookmarks
     *
     */
    showViewBookmarks() {
        console.log('show');
    }



    /**
     * Render
     *
     * @return JSX
     */
    render() {
        return (
            <div style={{
                width: '400px',
                float: 'right'
            }}>
                <Footer
                    showViewBookmarks={ ::this.showViewBookmarks }
                    stateViewBookmarks={ 'disabled' } />
            </div>
        );
    }

}
