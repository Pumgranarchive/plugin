import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LinkActions from 'actions/RelatedContentActions';
import Container from 'Container/';

@connect(state => ({
    pages: state.pages,
    relatedContent: state.relatedContent
}))
export default class PumgranaApp extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { pages: [], relatedContent: [] }
    static propTypes = {
        pages: React.PropTypes.array.isRequired,
        relatedContent: React.PropTypes.array.isRequired
    }



    /**
     * Render
     *
     * @return JSX
     */
    render() {
        let { pages, relatedContent } = this.props;
        let actions = bindActionCreators(LinkActions, this.props.dispatch);

        return (
            <Container
                actions={ actions }
                pages={ pages }
                relatedContent={ relatedContent } />
        );
    }

}
