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
        let { title, description, domainName, tags, bookmarked, visited } = this.props;

        return (
            <div onMouseOver={ ::this.onHover }
                 onMouseOut={ ::this.onHover }
                 className={ styles.container }>
                <BookmarkIcon
                    action={ ::this.bookmarkRelatedContent }
                    active={ bookmarked }
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
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    domainName: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    visited: PropTypes.bool.isRequired,
    bookmarkRelatedContent: PropTypes.func.isRequired
}
