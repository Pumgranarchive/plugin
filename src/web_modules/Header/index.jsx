import React, { Component } from 'react';
import ctx from 'classnames';
import styles from './Header.scss';
import BookmarkIcon from 'BookmarkIcon/';

const Header = ({ title, domainName, bookmarked, bookmarkPage, hasAncestors , hasParents, goBack, goNext }) => (
    <div className={ styles.container }>
        <a role="button" className={ ctx({
            [styles.back]: hasAncestors
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
            [styles.next]: hasParents
        }) }></a>
    </div>
);

export default Header;
