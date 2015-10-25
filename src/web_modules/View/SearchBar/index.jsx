import React, { Component, PropTypes } from 'react';
import styles from './SearchBar.scss';

export default class SearchBar extends Component{

    /**
     * onChange()
     *
     * @return {func} searchRelatedContent()
     */
    onChange(){
        let search = this.refs.searchBarInput.value;
        return this.props.searchRelatedContent(search);
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        return (
           <div>
               <input
                   type="text"
                   ref="searchBarInput"
                   placeholder="Search..."
                   className={ styles.input }
                   onChange={ ::this.onChange }
                   onKeyDown={ ::this.onChange } />
           </div>
        );
    }

}
