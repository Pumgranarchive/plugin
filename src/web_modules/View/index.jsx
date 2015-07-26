import React, {Component} from 'react';
import ctx from 'classnames';
import './index.scss';
import Header from 'Header/';
import SearchBar from 'SearchBar/';
import List from 'List/';

export default class View extends Component{

    /**
     * Props
     *
     */
    static defaultProps = {
        page: {},
        related_content: {},
        actions: {},
        position: 'current',
        lastPageId: 0,
        goTo: function(){}
    }
    static propTypes = {
        page: React.PropTypes.object.isRequired,
        related_content: React.PropTypes.object.isRequired,
        actions: React.PropTypes.object.isRequired,
        position: React.PropTypes.string.isRequired,
        lastPageId: React.PropTypes.number.isRequired,
        goTo: React.PropTypes.func.isRequired
    }



    /**
     * Initialize state
     *
     */
    state = {
        search: '',
    }



    /**
     * Handle search (event)
     *
     * @return setState()
     */
    handleSearch(search){
        return this.setState({
            search: search
        });
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        let {page, related_content, actions, position, lastPageId, goTo} = this.props;
        let {search} = this.state;

        console.log(position);

        return (
            <div className={`View View-${position}`}>
                <Header
                    lastPageId={ lastPageId }
                    goTo={ goTo }
                    page={ page } />
                <div className="View_content">
                    <h1>
                       {((search == '') ? 'Related content' : `Resulats for "${search}"`)}
                    </h1>
                    <SearchBar handleSearch={::this.handleSearch} />
                    <List
                        related_content={ related_content }
                        bookmarkItem={ actions.bookmarkItem }
                        visitItem={ actions.visitItem }
                        loadMore={true} />
                </div>
            </div>
        );
    }

}
