import React, { Component, PropTypes } from 'react';
import styles from './SearchBar.scss';
var timer;

export default class SearchBar extends Component{

    /**
     * onChange()
     * (update search resulatats when input changes)
     *
     * @return {func} resetSearchRelatedContent() || searchRelatedContent()
     */
    onChange(){
        let search = this.refs.searchBarInput.value;
        clearTimeout(timer);

        if(search === ''){
            //return this.props.resetSearchRelatedContent();
        }
        else{
            timer = setTimeout(() => {
                //return this.props.searchRelatedContent(search);
            }, 1300);
        }
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
