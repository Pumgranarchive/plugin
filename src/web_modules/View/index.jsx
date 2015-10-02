import React, { Component } from 'react';
import Header from 'Header/';
import styles from './View.scss';

export default class View extends Component{

    /**
     * Render
     *
     * @return {JSX}
     */
    render(){
        return (
            <div className={ styles.container }>
                <Header />
                { this.props.children }
            </div>
        );
    }

}
