import React, {Component} from 'react';
import ctx from 'classnames';
import './index.css';

export default class Footer{

    /**
     * Props
     *
     */
    static defaultProps = { related_content: {} }
    static propTypes = {
        related_content: React.PropTypes.object.isRequired
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
                 })} href="#/pumpgrana/all" title="View all your bookmarks">
                    <svg width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">
                         <title>View all your bookmarks</title>
                         <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#D2D2D2" fill="#EBEBEB" strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd"/>
                     </svg>
                 </a>
                 <a className="Footer_website" href="#/pumgrana/website" title="Aller sur Pumgrana"></a>
             </div>
         );
     }
}
