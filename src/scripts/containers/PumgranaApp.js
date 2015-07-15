import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LinkActions from "actions/ResultatActions";
import Container from 'Container/';

@connect(state => ({ data: state.data }))
export default class PumgranaApp extends Component{

    /**
     * Render
     *
     * @return JSX
     */
    render() {
        const { data, dispatch } = this.props;
        const actions = bindActionCreators(LinkActions, dispatch);
        
        return (
            <Container actions={actions} data={ data } />
        );
    }
}
