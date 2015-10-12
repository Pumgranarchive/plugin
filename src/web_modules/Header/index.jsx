import React, { Component } from 'react';
import ctx from 'classnames';
import styles from './Header.scss';
import BookmarkIcon from 'BookmarkIcon/';

const Header = ({ title, domainName, bookmarked, bookmarkPage }) => (
    <div className={ styles.container }>
        <a role="button" className={ ctx({
            [styles.back]: true
        }) }></a>
        <span className={ styles.domainName }>{ domainName }</span>
        <span className={ styles.title }>{ title }</span>
        <div className={ styles.bookmarkIcon }>
            <BookmarkIcon
                show={ true }
                active={ bookmarked }
                action={ () => bookmarkPage() } />
        </div>
        <a role='button' className={ ctx({
            [styles.next]: true
        }) }></a>
    </div>
);

export default Header;
