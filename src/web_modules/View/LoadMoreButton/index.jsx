import React, { Component } from 'react';
import styles from './LoadMoreButton';

export default class LoadMoreButton extends Component {

    /**
     * Render
     *
     * @return {JSX}
     */
    render() {
        let { status } = this.props;

        return (
            <div onClick={ () => this.props.action() }
                 className={ styles.button }>
                 { status == 'loading' ? 'Loading ...' : 'Load more' }
            </div>
        )
    }

}
