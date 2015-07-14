import React, {Component} from 'react';
import './index.css';

export default class SearchBar extends Component{

    /**
     * Props
     *
     */
    static defaultProps = {
        scroll: false
    }

    static propTypes = {
        scroll: React.PropTypes.bool.isRequired
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
        let {scroll, search} = this.props;

        return (
            <div className="SearchBar_container">
                <input type="text" ref="searchBarInput" placeholder="Search..." className="SearchBar" onKeyDown={::this._onChange} />
            </div>
        );
    }
}
