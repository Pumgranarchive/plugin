import React, {Component, PropTypes} from 'react';
import ctx from 'classnames';
import styles from './ToogleButton.scss';

const ToogleButton = ({ state, noResultats, action }) => (
    <button
        className={ ctx({
            [styles.openButton]: state == 'open',
            [styles.closedButton]: state == 'close',
            [styles.disabledButton]: !noResultats
        }) }
        onClick={ () => action() }>
    </button>
);

export default ToogleButton;
