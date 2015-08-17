import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as RelatedContentActions from 'actions/RelatedContentActions';
import * as PluginActions from 'actions/PluginActions';
import Container from 'Container/';

@connect(state => ({
    pages: state.pages,
    relatedContent: state.relatedContent,
    plugin: state.plugin
}))
export default class PumgranaApp extends Component{

    /**
     * Render
     *
     * @return JSX
     */
    render() {
        let { pages, relatedContent, plugin } = this.props;
        let actions = bindActionCreators({
            ...RelatedContentActions,
            ...PluginActions
        }, this.props.dispatch);

        return (
            <Container
                actions={ actions }
                pages={ pages }
                relatedContent={ relatedContent }
                hasBookmarks={ (relatedContent.filter(item => item.bookmarked === true).length ? true : false) }
                plugin={ plugin } />
        );
    }

}
