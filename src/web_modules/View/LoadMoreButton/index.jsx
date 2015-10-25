import React, { Component } from 'react';
import styles from './LoadMoreButton';

const LoadMoreButton = ({ action, status }) => (
    <div onClick={ () => action() }
         className={ styles.button }>
         { status == 'loading' ? 'Loading ...' : 'Load more' }
    </div>
);

export default LoadMoreButton;
