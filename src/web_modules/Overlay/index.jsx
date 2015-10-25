import React, { Component, PropTypes } from 'react';
import styles from './Overlay.scss';
import ctx from 'classnames';

const Overlay = ({ state, toogleAction }) => (
    <div className={
        ctx({
            [styles.openBox]: (state == 'open'),
            [styles.closedBox]: (state == 'close')
        })}
        style={ ( __DEBUG__ ? { zIndex: 0 } : {} ) }
        onClick={ e => toogleAction(e) } >
    </div>
);

export default Overlay;
