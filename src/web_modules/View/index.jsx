import React, { Component, PropTypes } from 'react';
import './index.scss';
import Header from 'Header/';
import SearchBar from 'SearchBar/';
import List from 'List/';

export default class View extends Component{

    /**
     * Props
     *
     */
    static propTypes = {
        page: PropTypes.object.isRequired,
        relatedContent: PropTypes.array.isRequired,
        position: PropTypes.string.isRequired,
        goToPage: PropTypes.func.isRequired,
        lastPageId: PropTypes.number.isRequired,
        searchFilter: PropTypes.string.isRequired,
        searchRelatedContent: PropTypes.func.isRequired,
        resetSearchRelatedContent: PropTypes.func.isRequired,
        loadMoreRelatedContent: PropTypes.func.isRequired,
        bookmarkRelatedContent: PropTypes.func.isRequired,
        visitRelatedContent: PropTypes.func.isRequired
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        let {
            page,
            relatedContent,
            position,
            lastPageId,
            goTo,
            searchFilter,
            searchRelatedContent,
            resetSearchRelatedContent,
            loadMoreRelatedContent,
            bookmarkRelatedContent,
            visitRelatedContent
        } = this.props;

        return (
            <div className={`View View-${position}`}>
                <Header
                    lastPageId={ lastPageId }
                    goTo={ goTo }
                    page={ page } />
                <div className="View_content">
                    <h1>
                       { ((searchFilter === '') ? 'Related content' : `Resulats for "${searchFilter}"`) }
                    </h1>
                    <SearchBar
                        searchRelatedContent={ searchRelatedContent }
                        resetSearchRelatedContent={ resetSearchRelatedContent } />
                    <List
                        page={ page }
                        relatedContent={ relatedContent }
                        loadMoreRelatedContent={ loadMoreRelatedContent }
                        bookmarkRelatedContent={ bookmarkRelatedContent }
                        visitRelatedContent={ visitRelatedContent }
                        loadMore={ true } />
                </div>
            </div>
        );
    }

}
