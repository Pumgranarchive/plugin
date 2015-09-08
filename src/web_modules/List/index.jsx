import React, { Component, PropTypes } from 'react';
import './index.scss';
import Item from './../Item/';
import ctx from 'classnames';

export default class List extends Component{

    /**
     * Props
     *
     */
    static propTypes = {
        relatedContent: PropTypes.array.isRequired,
        page: PropTypes.object,
        loadMoreRelatedContent: PropTypes.func,
        bookmarkRelatedContent: PropTypes.func.isRequired,
        visitRelatedContent: PropTypes.func.isRequired,
        loadMore: PropTypes.bool.isRequired
    }



    /**
     * Load more (event)
     *
     * @return loadMoreRelatedContent() (props function)
     */
    loadMore(){
        if(this.props.page){
            let {loadMoreRelatedContent, page} = this.props;
            loadMoreRelatedContent(page.id, page.url, page.searchFilter);
        }
    }



    /**
     * Render list
     *
     * @return JSX
     */
    renderList(){
        let {relatedContent, bookmarkRelatedContent, visitRelatedContent} = this.props;

        let list = relatedContent.map((item, i) => {
            return (
                <Item
                    bookmarkRelatedContent={ bookmarkRelatedContent }
                    visitRelatedContent={ visitRelatedContent }
                    key={i}
                    item={item} />
            );
        });

        return (
            <div>{ list }</div>
        );
    }



    /**
     * Render load more
     *
     * @return JSX
     */
    renderLoadMore(){
        let {page} = this.props;

        return (
            <button
                onClick={::this.loadMore}
                className={ctx('List_loadMore', {
                    'is-active': page.pendingLoadMoreData
                })}>
                { (page.pendingLoadMoreData ? 'Loading ...' : 'Load more') }
            </button>
        );
    }



    /**
     * Render (general)
     *
     * @return JSX
     */
    render(){
        let {relatedContent, loadMore} = this.props;

        if(relatedContent.length === 0){
            return (
                <div className="List">
                    {<div className="List-empty">No resultats found</div>}
                </div>
            );
        }
        else{
            return (
                <div className="List">
                    {this.renderList()}
                    { (loadMore ? this.renderLoadMore() : '') }
                </div>
            );
        }
    }
}
