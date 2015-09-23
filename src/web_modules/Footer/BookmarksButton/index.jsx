import React, { Component, PropTypes } from 'react';
import styles from './BookmarksButton';

export default class BookmarksButton extends Component{

    /**
     * Render
     *
     * @return JSX
     */
    render() {
        return (
            <div className={ styles.container }>
                <svg className={ styles.iconContainer } width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path className={ styles.icon } d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd"/>
                </svg>
            </div>
        );
     }

}

BookmarksButton.PropTypes = {
    onClick: PropTypes.func.isRequired,
    state: PropTypes.string.isRequired
};
