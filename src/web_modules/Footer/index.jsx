import React, { Component, PropTypes } from 'react';
import BookmarksButton from './BookmarksButton/';
import styles from './Footer';

const Footer = (props) => (
     <div className={ styles.container }>
         <div onClick={ () => props.toogleViewBookmarks() }>
             <BookmarksButton state={ props.stateViewBookmarks } />
         </div>
         <span className={ styles.logo } title="Pumgrana"></span>
     </div>
);

export default Footer;
