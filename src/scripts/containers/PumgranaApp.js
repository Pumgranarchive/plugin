import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import * as LinkActions from "actions/LinkActions";
import Header from 'Header/';
import Resultats from 'Resultats/';

export default class PumgranaApp extends Component{

    /**
     * Initialize state
     *
     */
    state = {
        page: {},
        items: []
    };



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        let {page, items} = this.state;

        return (
            <div className="Pumgrana">
                <Header page={page} />
                <Resultats items={items} />
            </div>
        )
    }
}
