import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LinkActions from "actions/ResultatActions";
import Container from 'Container/';

@connect(state => ({ pages: state.pages, related_content: state.related_content }))
export default class PumgranaApp extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { page: {}, related_content: [] }
    static propTypes = {
        page: React.PropTypes.object.isRequired,
        related_content: React.PropTypes.array.isRequired
    }



    /**
     * Render
     *
     * @return JSX
     */
    render() {
        const { pages, related_content } = this.props;
        const actions = bindActionCreators(LinkActions, this.props.dispatch);

        return (
            <Container actions={actions} pages={ pages } related_content={ related_content } />
        );
    }
}
