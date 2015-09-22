import React, { Component, PropTypes } from 'react';
import './index.scss';
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
            return this.props.resetSearchRelatedContent();
        }
        else{
            timer = setTimeout(() => {
                return this.props.searchRelatedContent(search);
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
           <div className="SearchBar_container">
               <input
                   type="text"
                   ref="searchBarInput"
                   placeholder="Search..."
                   className="SearchBar"
                   onChange={ ::this.onChange }
                   onKeyDown={ ::this.onChange } />
           </div>
        );
    }

}

SearchBar.propTypes = {
    searchRelatedContent: PropTypes.func.isRequired,
    resetSearchRelatedContent: PropTypes.func.isRequired
};
