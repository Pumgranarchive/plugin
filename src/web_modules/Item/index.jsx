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
        let { title, description, domainName, tags, bookmarked, visited } = this.props;

        return (
            <div onMouseOver={ ::this.onHover }
                 onMouseOut={ ::this.onHover }
                 className={ styles.container }>
                <BookmarkIcon
                    show={ this.state.hover } />
                <div>
                    <span className={ styles.domainName }>{ domainName }</span>
                    <h2 className={ styles.title }>{ title }</h2>
                    <p className={ styles.description }>{ description } </p>
                    { tags.map((tag, i) => { return (
                        <span className={ styles.tag } key={ i }>{ tag }</span>
                    ); }) }
                </div>
            </div>
        );
    }

}

Item.PropTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    domainName: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    visited: PropTypes.bool.isRequired
}
