import React, { Component, PropTypes } from 'react';
import './index.scss';
import ctx from 'classnames';

export default class Item extends Component{

    /**
     * Props
     *
     */
    static propTypes = {
        item: PropTypes.object.isRequired,
        bookmarkRelatedContent: PropTypes.func.isRequired,
        visitRelatedContent: PropTypes.func.isRequired
    }



    /**
     * Handle visited
     *
     */
    handleVisite(){
        this.props.visitRelatedContent(this.props.item.url);
        let selectors = [
            ...document.querySelectorAll('body > *:not(.Pumgrana__ac863f3)')
        ];
        selectors.map((element) => {
            element.parentNode.removeChild(element);
        });
    }



    /**
     * Handle bookmarked
     *
     */
    handleBookmark(){
        this.props.bookmarkRelatedContent(this.props.item.url);
    }


    /**
     * Render
     *
     */
    render(){
        let {visited, link, bookmarked, website, title, description, tags} = this.props.item;

        return (
            <div
                className={ctx('Item', {
                    'is-visited': visited
                })}
                href={ link }>
                <svg onClick={ ::this.handleBookmark } className={
                    ctx('Item_bookmark', {
                        'is-active': bookmarked
                    })
                } width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">
                    <title>View all your bookmarks</title>
                    <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#DCDCDC" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd"/>
                </svg>
                <div onClick={ ::this.handleVisite }>
                    <span className="Item_url">{ website }</span>
                    <h2 className="Item_title">{ title }</h2>
                    <p className="Item_description">{ description }</p>
                    { tags.map((tag, i) => { return (
                        <span className="Item_tag" key={ i }>{ tag }</span>
                    ); }) }
                </div>
            </div>
        );
    }
}
