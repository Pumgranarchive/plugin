import React, {Component} from 'react';
import './index.scss';
import Item from './../Item/';
import SearchBar from '../SearchBar/';
import ctx from 'classnames';

export default class List extends Component{

    /**
     * Props
     *
     */
    static defaultProps = {
        related_content: [],
        page: {},
        loadMoreRelatedContent: function(){return true},
        bookmarkRelatedContent: function(){return true},
        visitRelatedContent: function(){return true},
        loadMore: false
    }

    static propTypes = {
        related_content: React.PropTypes.array.isRequired,
        page: React.PropTypes.object.isRequired,
        loadMoreRelatedContent: React.PropTypes.func.isRequired,
        bookmarkRelatedContent: React.PropTypes.func.isRequired,
        visitRelatedContent: React.PropTypes.func.isRequired,
        loadMore: React.PropTypes.bool.isRequired
    }



    /**
     * Load more (event)
     *
     * @return setState() with object in param
     */
    loadMore(){
        this.props.loadMoreRelatedContent(this.props.page.id, this.props.page.url);
    }



    /**
     * Render list
     *
     * @return JSX
     */
    renderList(){
        let {related_content, bookmarkRelatedContent, visitRelatedContent} = this.props;

        let list = related_content.map((item, i) => {
            return (
                <Item bookmarkRelatedContent={ bookmarkRelatedContent } visitRelatedContent={ visitRelatedContent } key={i} item={item} />
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
        console.log(page);

        return (
            <button
                onClick={::this.loadMore}
                className={ctx("List_loadMore",{
                    "is-active": page.pendingData
                })}>
                { (page.pendingData ? 'Loading ...' : 'Load more') }
            </button>
        );
    }



    /**
     * Render (general)
     *
     * @return JSX
     */
    render(){
        let {related_content} = this.props;

        if(related_content.length == 0){
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
                    {this.renderLoadMore()}
                </div>
            )
        }
    }
}
