import React, {Component} from 'react';
import './index.css';
import ctx from 'classnames';

export default class Item extends Component{

    /**
     * Props
     *
     */
    static defaultProps = {
        item: {}
    }

    static propTypes = {
        item: React.PropTypes.object.isRequired
    }



    /**
     * Initialize state
     *
     */
    state = {
        title: this.props.item.title,
        summary: this.props.item.summary,
        tags: this.props.item.tags,
        url: this.props.item.url,
        link: this.props.item.link,
        visited: this.props.item.visited,
        bookmarked: this.props.item.bookmarked,
    }



    /**
     * Handle visited
     *
     */
    handleVisite(){
        this.setState({
            visited: true
        })
    }



    /**
     * Handle bookmarked
     *
     */
    handleBookmark(){
        this.setState({
            bookmarked: !this.state.bookmarked
        })
    }


    /**
     * Render
     *
     */
    render(){
        let {visited, link, bookmarked, url, title, summary, tags} = this.state;

        return (
            <div
                className={ctx('Item' ,{
                    'is-visited': visited
                })}
                href={ link }>
                <svg onClick={this.handleBookmark.bind(this)} className={
                    ctx('Item_bookmark', {
                        'is-active': bookmarked
                    })
                } width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">
                    <title>View all your bookmarks</title>
                    <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#DCDCDC" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd"/>
                </svg>
                <div onClick={this.handleVisite.bind(this)}>
                    <span className="Item_url">{ url }</span>
                    <h2 className="Item_title">{ title }</h2>
                    <p className="Item_description">{ summary }</p>
                    { tags.map((tag, i) => { return (
                        <span className="Item_tag">{ tag }</span>
                    );}) }
                </div>
            </div>
        );
    }
}
