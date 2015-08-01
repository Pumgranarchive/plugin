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
        bookmarkRelatedContent: function(){},
        visitRelatedContent: function(){},
        loadMore: false
    }

    static propTypes = {
        related_content: React.PropTypes.array.isRequired,
        bookmarkRelatedContent: React.PropTypes.func.isRequired,
        visitRelatedContent: React.PropTypes.func.isRequired,
        loadMore: React.PropTypes.bool.isRequired
    }



    /**
     * Initialize state
     *
     */
    state = {
        loading: false
    }



    /**
     * Load more (event)
     *
     * @return setState() with object in param
     */
    loadMore(){
        this.setState({
            loading: true
        })

        setTimeout(() => {
            return this.setState({
                loading: false
            })
        }, 3000);
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
        let {loading} = this.state;

        return (
            <button
                onClick={::this.loadMore}
                className={ctx("List_loadMore",{
                    "is-active": loading
                })}>
                { (loading ? 'Loading ...' : 'Load more') }
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
