import React, { Component } from 'react';
import ctx from 'classnames';
import styles from './Header.scss';

export default class Header extends Component{

    /**
     * Render
     *
     */
    render() {
        return (
            <div className={ styles.container }>
                <a role="button" className={ ctx({
                    [styles.back]: true
                }) }></a>
                <span className={ styles.url }>lemonde.fr</span>
                <span className={ styles.title }>Le titre de ce super article</span>
                <a role='button' className={ ctx({
                    [styles.next]: true
                }) }></a>
            </div>
        );
    }

}
