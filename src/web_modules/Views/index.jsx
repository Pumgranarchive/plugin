import React, { Component } from 'react';
import styles from './Views';

export default class Views extends Component{

    /**
     * Render
     *
     */
    render(){
        return (
            <div className={ styles.container }>
                { this.props.children }
            </div>
        );
    }

}
