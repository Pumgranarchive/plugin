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
<<<<<<< HEAD
    handleVisite(){
        this.props.visitRelatedContent(this.props.item.url);

        // Remove all elements of the page
        let selectors = [
            ...document.querySelectorAll('body > *:not(.Pumgrana__ac863f3)')
        ];
        selectors.map((element) => {
            element.parentNode.removeChild(element);
        });

        // Set size of body / html
        select('html')::css({
            height: '100vh'
        });
        select('body')::css({
            overflow: 'hidden'
        });

        // Create iframe
        let webView = document.createElement('iframe');
        webView.setAttribute('style', 'position: absolute; left: 0; top: 0;');
        webView.setAttribute('src', this.props.item.url);
        webView.setAttribute('width', '100%');
        webView.setAttribute('height', '100%');
        webView.setAttribute('frameborder', '0');
        document.querySelector('body').insertBefore(webView, document.querySelector('.Pumgrana__ac863f3'));
=======
    onHover(type) {
        return this.setState({
            hover: !this.state.hover
        })
>>>>>>> next
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
        let { title, description, domainName, tags, bookmarked, visited, _id } = this.props;

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
