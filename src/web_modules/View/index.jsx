import React, { Component, PropTypes } from 'react';
import Header from 'Header/';
import LoadMoreButton from './LoadMoreButton/';
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
                <div className={ styles.wrapper }>
                    <h2 className={ styles.title }>Related content</h2>
                    { this.props.children }
                </div>
                <footer className={ styles.footer }>
                    <LoadMoreButton />
                </footer>
            </div>
        );
    }

}

View.PropTypes = {
    children: PropTypes.object.isRequired
}
