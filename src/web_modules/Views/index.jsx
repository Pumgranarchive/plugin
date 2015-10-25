import React, { Component } from 'react';
import styles from './Views';

const Views = (props) => (
    <div className={ styles.container }>
        { props.children }
    </div>
);

export default Views;
