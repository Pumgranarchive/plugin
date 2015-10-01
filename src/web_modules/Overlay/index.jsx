import React, { Component, PropTypes } from 'react';
import styles from './Overlay.scss';
import ctx from 'classnames';

export default class Overlay extends Component{

    /**
     * Render
     *
     * @return {JSX}
     */
    render() {
        let { state } = this.props;
        let zIndex = {};
        if(__DEBUG__){
            zIndex = {
                zIndex: 0
            };
        }

        return (
            <div className={
                ctx({
                    [styles.openBox]: (state == 'open'),
                    [styles.closedBox]: (state == 'close')
                })}
                style={ zIndex }
                onClick={ e => this.props.toogleAction(e) } >
            </div>
        );
    }

}

Overlay.PropTypes = {
    state: PropTypes.string.isRequired,
    toogleAction: PropTypes.func.isRequired
};
