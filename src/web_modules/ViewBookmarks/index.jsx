import React, { Component, PropTypes } from 'react';
import ctx from 'classnames';
import styles from './ViewBookmarks';

const ViewBookmarks = ({ state, children }) => (
    <div className={ ctx({
        [styles.enableContainer]: state == 'enable',
        [styles.disabledContainer]: state == 'disabled'
    }) }>
        { children }
    </div>
);

export default ViewBookmarks;
