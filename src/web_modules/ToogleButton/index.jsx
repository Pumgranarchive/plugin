import React, {Component, PropTypes} from 'react';
import ctx from 'classnames';
import styles from './ToogleButton.scss';

export default class ToogleButton extends Component{

    /**
     * Render
     *
     * @return {JSX}
     */
    render(){
        let { state } = this.props;

        return (
            <button
                className={ ctx({
                    [styles.openButton]: (state == 'open'),
                    [styles.closedButton]: (state == 'close'),
                    [styles.disabledButton]: (state == 'disabled')
                }) }
                onClick={ () => this.props.action() }>
            </button>
        );
    }

}

ToogleButton.PropTypes = {
    action: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};
