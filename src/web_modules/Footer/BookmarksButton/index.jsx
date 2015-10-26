import React, { Component, PropTypes } from 'react';
import styles from './BookmarksButton';
import ctx from 'classnames';

const BookmarksButton = ({ state }) => (
    <div className={ ctx({
        [styles.disabledContainer]: state == 'disabled',
        [styles.activeContainer]: state == 'enabled',
        [styles.clickedContainer]: state == 'clicked'
    }) } >
        <svg className={ styles.iconContainer } width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path className={ ctx({
                [styles.disabledIcon]: state == 'disabled',
                [styles.enabledIcon]: state == 'enabled' || state == 'clicked'
            }) } d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd"/>
        </svg>
    </div>
);

export default BookmarksButton;
