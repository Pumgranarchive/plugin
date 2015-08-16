import React, {Component} from 'react';
import './index.scss';
import ctx from 'classnames';

export default class Footer extends Component{

    /**
     * Props
     *
     */
    static defaultProps = {
        relatedContent: [],
        goToViewBookmarks: function(){},
        showViewBookmarks: false
    }
    static propTypes = {
        relatedContent: React.PropTypes.array.isRequired,
        goToViewBookmarks: React.PropTypes.func.isRequired,
        showViewBookmarks: React.PropTypes.bool.isRequired
    }



    /**
     * On click
     *
     * @return function
     */
    onClick(){
        return this.props.goToViewBookmarks();
    }



    /**
     * Render
     *
     * @return JSX
     */
     render(){
         let { relatedContent, showViewBookmarks } = this.props;

         return (
             <div className="Footer">
                 <a className={ ctx('Footer_viewBookmarks', {
                    'is-active': relatedContent.filter(item => item.bookmarked === true).length,
                    'is-clicked': showViewBookmarks
                })} title="View all your bookmarks" role="button" onClick={ ::this.onClick }>
                    <svg width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">
                         <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#D2D2D2" fill="#EBEBEB" strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd"/>
                     </svg>
                 </a>
                 <a className="Footer_website" href="#/pumgrana/website" title="Go to Pumgrana website"></a>
             </div>
         );
     }
}
