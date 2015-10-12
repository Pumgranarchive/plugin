import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bookmarkRelatedContent } from 'actions/RelatedContentActions';
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

        return response;
    }



    /**
     * Bookmark related content
     *
     * @param {integer} relatedContentId
     * @return {func} relatedContentId()
     */
    bookmarkRelatedContent(relatedContentId) {
        return this.props.dispatch(bookmarkRelatedContent(relatedContentId))
    }



    /**
     * Render
     *
     * @return {jsx}
     */
    render() {
        let relatedContent = this.getRelatedContent(),
            isFetching = (this.props.type == 'bookmarks' ? false : this.props.pages.get(this.props.pageUrl).get('isFetching')),
            getPageInformations = this.getPageInformations();

        return (
            <View
                type={ this.props.type }
                pageInformations={ getPageInformations }
                position={ 'current' }
                nrbOfRelatedContent={ relatedContent.length }
                isFetching={ isFetching } >
            {
                relatedContent.map((item, index) => (
                    <Item
                        key={ index }
                        { ...item }
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
