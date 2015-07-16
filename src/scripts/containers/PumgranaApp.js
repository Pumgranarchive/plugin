import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LinkActions from "actions/ResultatActions";
import Container from 'Container/';

@connect(state => ({ pages: state.pages, related_content: state.related_content }))
export default class PumgranaApp extends Component{

    /**
     * Render
     *
     * @return JSX
     */
    render() {
        const { pages, related_content, dispatch } = this.props;
        const actions = bindActionCreators(LinkActions, dispatch);

        return (
            <Container actions={actions} pages={ pages } related_content={ related_content } />
        );
    }
}
