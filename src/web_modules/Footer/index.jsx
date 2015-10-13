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
                 <div onClick={ () => this.props.toogleViewBookmarks() }>
                     <BookmarksButton state={ this.props.stateViewBookmarks } />
                 </div>
                 <span className={ styles.logo } title="Pumgrana"></span>
             </div>
         );
     }

}

Footer.propTypes = {
    toogleViewBookmarks: PropTypes.func.isRequired,
    stateViewBookmarks: PropTypes.string.isRequired
};
