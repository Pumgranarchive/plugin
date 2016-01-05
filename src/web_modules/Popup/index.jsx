import React, { Component } from 'react';
import types from 'constants/ActionTypes';
import styles from './Popup';

export default class Popup extends Component {

    state = { disabled: null }

    /*
     * Component will mount
     *
     */
    componentWillMount() {
        chrome.tabs.sendMessage(this.props.tabs[0].id, { type: types.GET_DISABLED_STATE }, response => {
            return this.setState({
                disabled: response.type
            })
        });
    }



    /*
     * onClick()
     *
     * @param {string} type
     */
    onClick(type) {
        if(type == this.state.disabled) {
            type = types.ENABLE;
        }

        this.setState({
            disabled: type == types.ENABLE ? null : type
        })
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
                <div className={ styles.explain }>{ this.state.disabled !== null ? 'Pumgrana est désactivé' : 'Pumgrana est activé'}</div>
                { this.state.disabled !== null &&
                    <button className={ styles.button } onClick={ () => this.onClick(types.ENABLE) }>Réactiver</button>
                }
                { this.state.disabled === null &&
                    <div>
                        <button className={ styles.button } onClick={ () => this.onClick(types.DISABLE_FOR_THIS_PAGE) }>Désactiver pour cette page</button>
                        <button className={ styles.button } onClick={ () => this.onClick(types.DISABLE_FOR_THIS_WEBSITE) }>Désactiver pour ce site</button>
                    </div>
                }
            </div>
        );
    }

}
