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
     * getRelatedContent()
     *
     * @return {array} response
     */
    getRelatedContent() {
        let page = this.props.pages.get(this.props.pageUrl),
            response = [];

        page.get('relatedContent').map(relatedContent => {
            response = [
                ...response,
                {
                    _id: relatedContent,
                    ...this.props.relatedContent.get('items').get(relatedContent).toJS()
                }
            ]
        });

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
            isFetching = this.props.pages.get(this.props.pageUrl).get('isFetching');

        return (
            <View
                nrbOfRelatedContent={ relatedContent.length }
                isFetching={ isFetching } > {
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
    pageUrl: PropTypes.string.isRequired,
    pages: PropTypes.object.isRequired
};
