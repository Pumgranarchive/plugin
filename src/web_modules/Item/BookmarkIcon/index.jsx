import React, { Component, PropTypes } from 'react';
import ctx from 'classnames';
import styles from './BookmarkIcon.scss';

export default class BookmarkIcon extends Component {

    /**
     * Render
     *
     * @return {JSX}
     */
    render() {
        let { show } = this.props;

        return (
            <svg width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg"
                 className={ ctx({
                     [styles.enabledContainer]: show,
                     [styles.disabledContainer]: !show
                 }) }>
                <title>View all your bookmarks</title>
                <path className={ styles.icon } d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd"/>
            </svg>
        );
    }

}

BookmarkIcon.PropTypes = {
    show: PropTypes.bool.isRequired
};
