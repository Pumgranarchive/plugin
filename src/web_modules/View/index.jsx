import React, {Component} from 'react';
import './style.scss';
import Header from 'Header/';
import SearchBar from 'SearchBar/';
import List from 'List/';

export default class View extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { page: {}, related_content: {}, actions: {} }
    static propTypes = {
        page: React.PropTypes.object.isRequired,
        related_content: React.PropTypes.object.isRequired,
        actions: React.PropTypes.object.isRequired
    }



    /**
     * Search
     *
     */
    handleSearch(){
        return true;
    }


    /**
     * Render
     *
     * @return JSX
     */
    render(){
        let {page, related_content, actions} = this.props;

        return (
            <div className="View">
                <Header
                    page={ page } />
                <div className="View_content">
                    <h1>Related content</h1>
                    <SearchBar handleSearch={::this.handleSearch} />
                    <List
                        related_content= { related_content }
                        bookmarkItem={ actions.bookmarkItem }
                        visitItem =  { actions.visitItem } />
                </div>
            </div>
        );
    }

}
