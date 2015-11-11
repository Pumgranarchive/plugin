import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import BookmarkIcon from 'BookmarkIcon/';
import styles from './Item.scss';

export default class Item extends Component{

    /**
     * onHover()
     *
     * @return {string} type
     * @return {func} setState()
     */
    state = { hover: false };
    onHover(type) {
        return this.setState({
            hover: !this.state.hover
        })
    }



    /**
     * bookmarkRelatedContent()
     *
     * @return {func} bookmarkRelatedContent()
     */
    bookmarkRelatedContent() {
        return this.props.bookmarkRelatedContent(this.props._id);
    }



    /**
     * render()
     *
     * @return {jsx}
     */
    render() {
        let { title, description, domainName, bookmarked, visited, _id, paginated } = this.props;

        return (
            <div onMouseEnter={ ::this.onHover }
                 onMouseLeave={ ::this.onHover }
                 className={ cx({
                     [styles.paginatedContainer]: paginated,
                     [styles.notPaginatedContainer]: !paginated
                 }) }>
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
    paginated: PropTypes.bool.isRequired,
    visited: PropTypes.bool.isRequired,
    bookmarkRelatedContent: PropTypes.func.isRequired
}
