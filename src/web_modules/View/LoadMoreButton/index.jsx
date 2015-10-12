import React, { Component } from 'react';
import styles from './LoadMoreButton';

export default class LoadMoreButton extends Component {

    /**
     * Render
     *
     * @return {JSX}
     */
    render() {
        return (
            <div onClick={ () => this.props.action() }
                 className={ styles.button }>
                Load more
            </div>
        )
    }

}
