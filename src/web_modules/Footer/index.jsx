import React, {Component} from 'react';
import './index.scss';
import ctx from 'classnames';

export default class Footer{

    /**
     * Props
     *
     */
    static defaultProps = {
        related_content: [],
        goToBookmarks: function(){}
    }
    static propTypes = {
        related_content: React.PropTypes.array.isRequired,
        goToBookmarks: React.PropTypes.func.isRequired
    }



    /**
     * On click
     *
     * @return function
     */
    _onClick(){
        return this.props.goToBookmarks();
    }



    /**
     * Render
     *
     * @return JSX
     */
     render(){
         let { related_content } = this.props;

         return(
             <div className="Footer">
                 <a className={ ctx("Footer_viewBookmarks", {
                    "is-active": related_content.filter(item => item.bookmarked === true).length
                })} title="View all your bookmarks" role="button" onClick={ ::this._onClick }>
                    <svg width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">
                         <title>View all your bookmarks</title>
                         <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#D2D2D2" fill="#EBEBEB" strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd"/>
                     </svg>
                 </a>
                 <a className="Footer_website" href="#/pumgrana/website" title="Go to Pumgrana website"></a>
             </div>
         );
     }
}
