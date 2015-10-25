import React, { Component, PropTypes } from 'react';
import ctx from 'classnames';
import styles from './Wrapper';

export default class Wrapper extends Component {

    /**
     * Render
     *
     * @return {jsx}
     */
    render() {
        let { state, noResultats } = this.props;
        let zIndex = {};
        if(__DEBUG__){
            zIndex = {
                zIndex: 0
            };
        }

        return (
            <div className={ ctx({
                [styles.openedWrapper]: state == 'open',
                [styles.closedWrapper]: state == 'close',
                [styles.disabledWrapper]: !noResultats
            }) } style={ zIndex }>
                { this.props.children }
            </div>
        );
    }

}

Wrapper.PropTypes = {
    state: PropTypes.string.isRequired
};
