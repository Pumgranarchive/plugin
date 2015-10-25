import React, { Component, PropTypes } from 'react';
import ctx from 'classnames';
import styles from './Wrapper';

const Wrapper = ({ state, children, noResultats }) => (
    <div className={ ctx({
        [styles.openedWrapper]: state == 'open',
        [styles.closedWrapper]: state == 'close',
        [styles.disabledWrapper]: !noResultats
    }) } style={ ( __DEBUG__ ? { zIndex: 0 } : {} ) }>
        { children }
    </div>
);

export default  Wrapper;
