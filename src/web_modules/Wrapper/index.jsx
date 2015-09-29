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
        let { state } = this.props;

        return (
            <div className={ ctx({
                [styles.enabledWrapper]: (state == 'open'),
                [styles.disabledWrapper]: (state == 'close')
            }) }>
                { this.props.children }
            </div>
        );
    }

}

Wrapper.PropTypes = {
    state: PropTypes.string.isRequired
};
