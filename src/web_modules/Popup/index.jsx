import React, { Component } from 'react';
import styles from './Popup';
import types from 'constants/ActionTypes';;

export default class Popup extends Component {

    /*
     * Component will mount
     *
     */
    componentWillMount() {
        chrome.tabs.sendMessage(this.props.tabs[0].id, { type: types.GET_DISABLED_STATE }, response => {
            console.log(response);
        });
    }



    /*
     * onClick()
     *
     * @param {string} type
     */
    onClick(type) {
        chrome.tabs.sendMessage(this.props.tabs[0].id, { type });
    }



    /*
     * render()
     *
     * @return {jsx}
     */
    render() {
        return (
            <div className={ styles.container }>
                <div className={ styles.logo }></div>
                <button className={ styles.button } onClick={ () => this.onClick(types.DISABLE_FOR_THIS_PAGE) }>Désactiver pour cette page</button>
                <button className={ styles.button } onClick={ () => this.onClick(types.DISABLE_FOR_THIS_WEBSITE) }>Désactiver pour ce site</button>
            </div>
        );
    }

}
