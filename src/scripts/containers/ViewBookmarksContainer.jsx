import React, { Component } from 'react';
import removeDuplicateContent from 'utils/removeDuplicateContent';
import {
    bookmarkRelatedContent,
    visitRelatedContent
} from 'actions/RelatedContentActions';
import { connect } from 'react-redux';
import ViewBookmarks from 'ViewBookmarks/';

@connect(state => ({
    relatedContent: state.relatedContent,
    plugin: state.plugin
}))
export default class ViewBookmarksContainer extends Component{

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
     * Render
     *
     * @return JSX
     */
    render() {
        let { relatedContent, plugin } = this.props;

        return (
            <ViewBookmarks
                relatedContent={
                    removeDuplicateContent(
                        relatedContent.filter(
                            item => item.bookmarked === true
                        )
                    )
                }
                show={ plugin.showViewBookmarks }
                bookmarkRelatedContent={ ::this.bookmarkRelatedContent }
                visitRelatedContent={ ::this.visitRelatedContent } />
        );
    }

}
