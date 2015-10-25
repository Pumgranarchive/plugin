import React, { Component, PropTypes } from 'react';
import BookmarkIcon from 'BookmarkIcon/';
import styles from './Item.scss';

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
     * @return {string} type
     * @return {func} setState()
     */
    onHover(type) {
        return this.setState({
            hover: !this.state.hover
        })
    }



    /**
     * bookmarkRelatedContent()
     *
     *
     */
    bookmarkRelatedContent() {
        return this.props.bookmarkRelatedContent(this.props._id);
    }



    /**
     * Render
     *
     * @return {JSX}
     */
    render() {
        let { title, description, domainName, bookmarked, visited, _id } = this.props;

        return (
            <div onMouseOver={ ::this.onHover }
                 onMouseOut={ ::this.onHover }
                 className={ styles.container }>
                <BookmarkIcon
                    action={ ::this.bookmarkRelatedContent }
                    active={ bookmarked }
                    show={ this.state.hover } />
                <div onClick={ () => this.props.clickOnRelatedContent(_id) }>
                    <span className={ styles.domainName }>{ domainName }</span>
                    <h2 className={ styles.title }>{ title }</h2>
                    <p className={ styles.description }>{ description } </p>
                </div>
            </div>
        );
    }

}

Item.PropTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    domainName: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    visited: PropTypes.bool.isRequired,
    bookmarkRelatedContent: PropTypes.func.isRequired
}
