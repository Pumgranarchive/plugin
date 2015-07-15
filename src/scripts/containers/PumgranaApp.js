import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LinkActions from "actions/LinkActions";
import Header from 'Header/';
import Resultats from 'Resultats/';

@connect(state => ({
    links: state.links
}))

export default class PumgranaApp extends Component{


    /**
     * Initialize state
     *
     */
    state = {
        page: {},
    }



    /**
     * Render
     *
     * @return JSX
     */

    render() {
        const { page } = this.state;
        const { links, dispatch } = this.props;
        const actions = bindActionCreators(LinkActions, dispatch);

        return (
            <div className="Pumgrana">
                <Header page={page} />
                <Resultats items={links} />
            </div>
        );
    }
}
