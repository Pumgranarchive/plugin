import React, { Component } from 'react';
import ctx from 'classnames';
import styles from './Header.scss';

const Header = ({ title, domainName }) => (
    <div className={ styles.container }>
        <a role="button" className={ ctx({
            [styles.back]: true
        }) }></a>
        <span className={ styles.domainName }>{ domainName }</span>
        <span className={ styles.title }>{ title }</span>
        <a role='button' className={ ctx({
            [styles.next]: true
        }) }></a>
    </div>
);

export default Header;
