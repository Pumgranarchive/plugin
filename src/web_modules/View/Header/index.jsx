import React, { Component } from 'react';
import ctx from 'classnames';
import styles from './Header.scss';
import BookmarkIcon from 'BookmarkIcon/';

const Header = ({ title, domainName, bookmarked, bookmarkPage, goTo, hasAncestors , hasParents, goBack, goNext }) => (
    <div className={ styles.container }>
        <div onClick={ () => goTo('back') }
           role="button"
           className={ ctx({
            [styles.back]: hasAncestors
        }) }></div>
        <span className={ styles.domainName }>{ domainName }</span>
        <span className={ styles.title }>{ title }</span>
        <div className={ styles.bookmarkIcon }>
            <BookmarkIcon
                show={ true }
                active={ bookmarked }
                action={ () => bookmarkPage() } />
        </div>
        <div onClick={ () => goTo('next') }
           role='button'
           className={ ctx({
            [styles.next]: hasParents
        }) }></div>
    </div>
);

export default Header;
