import React, { Component, PropTypes } from 'react';
import BookmarkIcon from './BookmarkIcon/';
import styles from './index.scss';

export default class Item extends Component{

    /**
     * State
     *
     */
    state = {
        hover: false
    };



    /**
     * Hover
     *
     * @return {func} setState()
     */
    onHover() {
        return this.setState({
            hover: !this.state.hover
        })
    }



    /**
     * Render
     *
     * @return {JSX}
     */
    render() {

        return (
            <div onMouseOver={ ::this.onHover }
                 onMouseOut={ ::this.onHover }
                 className={ styles.container }>
                <BookmarkIcon
                    show={ this.state.hover } />
                <div>
                    <span className={ styles.domainName }>lemonde.fr</span>
                    <h2 className={ styles.title }>Mon titre à afficher</h2>
                    <p className={ styles.description }>lorem ipsum</p>
                    { ['tag 1', 'tag 2', 'tag 3'].map((tag, i) => { return (
                        <span className={ styles.tag } key={ i }>{ tag }</span>
                    ); }) }
                </div>
            </div>
        );
    }

}

Item.PropTypes = {

}
