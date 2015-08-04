import React, {Component} from 'react';
import './index.scss';
var timer;

export default class SearchBar extends Component{

    /**
     * Props
     *
     */
    static defaultProps = {
        handleSearch: () => {return true},
        resetSearch: () => {return true}
    }
    static propTypes = {
        handleSearch: React.PropTypes.func.isRequired,
        resetSearch: React.PropTypes.func.isRequired
    }



    /**
     * On change event
     *
     */
    _onChange(){
        let search = this.refs.searchBarInput.getDOMNode().value;
        clearTimeout(timer);

        if(search == ''){
            this.props.resetSearch();
        }
        else{
            timer = setTimeout(() => {
                this.props.handleSearch(search);
            }, 1300);
        }
    }



    /**
     * Render
     *
     * @return <html>
     */
    render(){
        return (
            <div className="SearchBar_container">
                <input
                    type="text"
                    ref="searchBarInput"
                    placeholder="Search..."
                    className="SearchBar"
                    onChange={::this._onChange}
                    onKeyDown={::this._onChange} />
            </div>
        );
    }
}
