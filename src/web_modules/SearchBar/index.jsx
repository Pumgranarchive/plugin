import React, { Component, PropTypes } from 'react';
import './index.scss';
var timer;

export default class SearchBar extends Component{

    /**
     * Props
     *
     */
    static propTypes = {
        searchRelatedContent: PropTypes.func.isRequired,
        resetSearchRelatedContent: PropTypes.func.isRequired
    }



    /**
     * On change event
     *
     */
    onChange(){
        let search = this.refs.searchBarInput.getDOMNode().value;
        clearTimeout(timer);

        if(search === ''){
            this.props.resetSearchRelatedContent();
        }
        else{
            timer = setTimeout(() => {
                this.props.searchRelatedContent(search);
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
