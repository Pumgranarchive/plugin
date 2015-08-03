import React, {Component} from 'react';
import './index.scss';

export default class SearchBar extends Component{

    /**
     * Props
     *
     */
    static defaultProps = {
        handleSearch: function(){return true;}
    }
    static propTypes = {
        handleSearch: React.PropTypes.func.isRequired
    }



    /**
     * On change event
     *
     */
    _onChange(){
        clearTimeout(timer);
        let timer = setTimeout(() => {
            this.props.handleSearch(
                this.refs.searchBarInput.getDOMNode().value
            );
        }, 1300);
    }



    /**
     * Render
     *
     * @return <html>
     */
    render(){
        return (
            <div className="SearchBar_container">
                <input type="text" ref="searchBarInput" placeholder="Search..." className="SearchBar" onKeyDown={::this._onChange} />
            </div>
        );
    }
}
