import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bookmarkRelatedContent, getRelatedContent } from 'actions/RelatedContentActions';
import View from 'View/';
import Item from 'Item/';

@connect(state => ({
    pages: state.pages,
    relatedContent: state.relatedContent
}))
export default class ViewContainer extends Component {

    /**
     * getPageInformations
     *
     */
    getPageInformations() {
        let page = this.props.relatedContent.get(this.props.pageUrl),
            response = {};

        if(page !== undefined) {
            response = page.toJS();
        }

        return response;
    }



    /**
     * getRelatedContent()
     *
     * @return {array} response
     */
    getRelatedContent() {
        let response = [];

        if(this.props.type == 'bookmarks') {
            this.props.relatedContent.filter(
                relatedContent => relatedContent.get('bookmarked')
            ).map((relatedContent, key) => {
                response = [
                    ...response,
                    {
                        _id: key,
                        ...relatedContent.toJS()
                    }
                ]
            });
        }
        else { // type == 'page'
            let page = this.props.pages.get(this.props.pageUrl);

            if(page.get('relatedContent') !== undefined) {
                page.get('relatedContent').map(relatedContent => {
                    response = [
                        ...response,
                        {
                            _id: relatedContent,
                            ...this.props.relatedContent.get(relatedContent).toJS()
                        }
                    ]
                });
            }
        }


        return response;
    }



    /**
     * Bookmark related content
     *
     * @param {integer} relatedContentId
     * @return {func} bookmarkRelatedContent()
     */
    bookmarkRelatedContent(relatedContentId) {
        return this.props.dispatch(bookmarkRelatedContent(relatedContentId))
    }



    /**
     * Bookmark page
     *
     * @return {func} relatedContentId()
     */
    bookmarkPage() {
        return this.props.dispatch(bookmarkRelatedContent(this.props.pageUrl))
    }



    /**
     * loadMoreRelatedContent()
     *
     * @return {func} getRelatedContent()
     */
    loadMoreRelatedContent() {
        return this.props.dispatch(getRelatedContent({
            url: document.location.href,
            start: (this.getRelatedContent().length + 1)
        }));
    }



    /**
     * clickOnRelatedContent
     *
     * @param {string} relatedContentId
     */
    clickOnRelatedContent(relatedContentId) {
        return this.props.dispatch(getRelatedContent({
            url: relatedContentId
        }));
    }


    /**
     * hasAncestors() && hasParents()
     *
     * @return {bool}
     */
    hasAncestors() {
        let i = 0,
            founded = false;

        if(this.props.pageUrl !== undefined) {
            this.props.pages.map((page, index) => {
                if(index == this.props.pageUrl){
                    founded = true;
                }

                if(!founded) {
                    i++;
                }
            });
        }

        if(i > 0) {
            return true;
        }

        return false;
    }

    hasParents() {
        let i = 0,
            founded = false;

        if(this.props.pageUrl !== undefined) {
            this.props.pages.reverse().map((page, index) => {
                if(index == this.props.pageUrl){
                    founded = true;
                }

                if(!founded) {
                    i++;
                }
            });
        }

        if(i > 0) {
            return true;
        }

        return false;
    }





    /**
     * Render
     *
     * @return {jsx}
     */
    render() {
        let relatedContent = this.getRelatedContent(),
            isFetching = (this.props.type == 'bookmarks' ? false : this.props.pages.get(this.props.pageUrl).get('isFetching')),
            getPageInformations = this.getPageInformations(),
            hasAncestors = this.hasAncestors(),
            hasParents = this.hasParents();

        return (
            <View
                bookmarkPage={ ::this.bookmarkPage }
                loadMoreRelatedContent={ ::this.loadMoreRelatedContent }
                type={ this.props.type }
                pageInformations={ getPageInformations }
                current={ (this.props.type == 'bookmarks' ? false : this.props.pages.get(this.props.pageUrl).get('current')) }
                hasAncestors={ hasAncestors }
                hasParents={ hasParents }
                nrbOfRelatedContent={ relatedContent.length }
                isFetching={ isFetching } >
            {
                relatedContent.map((item, index) => (
                    <Item
                        key={ index }
                        { ...item }
                        clickOnRelatedContent={ ::this.clickOnRelatedContent }
                        bookmarkRelatedContent={ ::this.bookmarkRelatedContent } />
                ))
            } </View>
        );
    }

}

ViewContainer.PropTypes = {
    pageUrl: PropTypes.string,
    pages: PropTypes.object.isRequired
};
