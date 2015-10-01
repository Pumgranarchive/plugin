import React, { Component, PropTypes } from 'react';
import BookmarksButton from './BookmarksButton/';
import styles from './Footer';

export default class Footer extends Component{

    /**
     * Render
     *
     * @return {JSX}
     */
     render(){
         return (
             <div className={ styles.container }>
                 <BookmarksButton
                     onClick={ ::this.props.showViewBookmarks }
                     state={ this.props.stateViewBookmarks } />
                 <span className={ styles.logo } title="Pumgrana"></span>
             </div>
         );
     }

}

Footer.propTypes = {
    showViewBookmarks: PropTypes.func.isRequired,
    stateViewBookmarks: PropTypes.string.isRequired
};
