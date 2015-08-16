import React, {Component} from 'react';
import removeDuplicateContent from 'utils/removeDuplicateContent';
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
        relatedContent: [],
        position: 'current',
        lastPageId: 0,
        goTo: function(){}
    }
    static propTypes = {
        page: React.PropTypes.object.isRequired,
        relatedContent: React.PropTypes.array.isRequired,
        position: React.PropTypes.string.isRequired,
        lastPageId: React.PropTypes.number.isRequired,
        goTo: React.PropTypes.func.isRequired
    }



    /**
     * Component will mount
     *
     */
    componentWillMount(){
        this.props.actions.getRelatedContent(this.props.page.id, this.props.page.url);
    }



    /**
     * Handle search (event)
     *
     */
    handleSearch(search){
        this.props.actions.searchRelatedContent(this.props.page.id, this.props.page.url, search);
    }



    /**
     * Reset search (event)
     *
     */
    resetSearch(){
        if(this.props.page.searchFilter !== ''){
            this.props.actions.resetSearchRelatedContent(this.props.page.id);
        }
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        let {page, relatedContent, actions, position, lastPageId, goTo} = this.props;

        return (
            <div className={`View View-${position}`}>
                <Header
                    lastPageId={ lastPageId }
                    goTo={ goTo }
                    page={ page } />
                <div className="View_content">
                    <h1>
                       { ((page.searchFilter === '') ? 'Related content' : `Resulats for "${page.searchFilter}"`) }
                    </h1>
                    <SearchBar
                        handleSearch={::this.handleSearch}
                        resetSearch={::this.resetSearch} />
                    <List
                        page={ page }
                        relatedContent={ removeDuplicateContent(relatedContent.filter(
                            item => item.searchFilter === page.searchFilter
                        ))}
                        loadMoreRelatedContent={ actions.loadMoreRelatedContent }
                        bookmarkRelatedContent={ actions.bookmarkRelatedContent }
                        visitRelatedContent={ actions.visitRelatedContent }
                        loadMore={ true } />
                </div>
            </div>
        );
    }

}
