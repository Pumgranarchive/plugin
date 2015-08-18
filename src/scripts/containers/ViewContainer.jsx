import React, { Component, PropTypes } from 'react';
import removeDuplicateContent from 'utils/removeDuplicateContent';
import {
    getRelatedContent,
    searchRelatedContent,
    bookmarkRelatedContent,
    visitRelatedContent,
    loadMoreRelatedContent,
    resetSearchRelatedContent
} from 'actions/RelatedContentActions';
import { connect } from 'react-redux';
import View from 'View/';

@connect(state => ({
    pages: state.pages,
    relatedContent: state.relatedContent
}))
export default class ViewContainer extends Component{

    /**
     * Props
     *
     */
    static propTypes = {
        position: PropTypes.string.isRequired,
        pageId: PropTypes.number.isRequired,
        pageUrl: PropTypes.string.isRequired
    }



    /**
     * Get related content (fetch data)
     *
     * @return dispatch getRelatedContent()
     */
    componentDidMount(){
        if(this.props.pageUrl.substring(4, 5) !== 's'){
            return this.props.dispatch(getRelatedContent(
                this.props.pageId,
                this.props.pageUrl
            ));
        }
    }



    /**
     * Search related content
     *
     */
    searchRelatedContent(search){
        this.props.dispatch(searchRelatedContent(
            this.props.pageId,
            this.props.pageUrl,
            search
        ));
    }



    /**
     * Reset searchRelatedContent()
     *
     */
    resetSearchRelatedContent(){
        let pageSearchFilter = this.props.pages.filter( page => page.id === this.props.pageId )[0].searchFilter;

        if(pageSearchFilter !== ''){
            this.props.dispatch(resetSearchRelatedContent(this.props.pageId));
        }
    }



    /**
     * Load more related content
     *
     * @return dispatch loadMoreRelatedContent()
     */
    loadMoreRelatedContent(){
        return this.props.dispatch(loadMoreRelatedContent(
            this.props.pageId,
            this.props.pages.filter( page => page.id === this.props.pageId )[0].url,
            this.state.searchFilter
        ));
    }



    /**
     * Bookmard a related content
     *
     * @param itemUrl (string)
     * @return dispatch bookmarkRelatedContent()
     */
    bookmarkRelatedContent(itemUrl){
        return this.props.dispatch(bookmarkRelatedContent(itemUrl));
    }



    /**
     * Visit a related content
     *
     * @param itemUrl (string)
     * @return dispatch visitRelatedContent()
     */
    visitRelatedContent(itemUrl){
        return this.props.dispatch(visitRelatedContent(itemUrl));
    }



    /**
     * GoToPage()
     *
     * @param pageId (numb)
     * @return goToPage() (props function)
     */
    goToPage(pageId){
        return this.props.goToPage(pageId);
    }



    /**
     * Render
     *
     * @return JSX
     */
    render() {
        let { pages, pageId, relatedContent, position } = this.props;
        let page = pages.filter( item => item.id === pageId )[0];

        return (
            <View
                page={ page }
                relatedContent={ removeDuplicateContent(relatedContent.filter( item =>
                    item.pageId === pageId && item.searchFilter === page.searchFilter )) }
                position={ position }
                goToPage={ ::this.goToPage }
                lastPageId={ (pages.length - 1) }
                loadMoreRelatedContent={ ::this.loadMoreRelatedContent }
                searchFilter={ page.searchFilter }
                searchRelatedContent={ ::this.searchRelatedContent }
                resetSearchRelatedContent={ ::this.resetSearchRelatedContent }
                bookmarkRelatedContent={ ::this.bookmarkRelatedContent }
                visitRelatedContent={ ::this.visitRelatedContent } />
        );
    }

}
