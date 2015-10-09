import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
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
                {...this.props.relatedContent.get('items').get(relatedContent).toJS()}
            ]
        });

        return response;
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
                        { ...item }
                        key={ index } />
                ))
            } </View>
        );
    }

}

ViewContainer.PropTypes = {
    pageUrl: PropTypes.string.isRequired,
    pages: PropTypes.object.isRequired
};
