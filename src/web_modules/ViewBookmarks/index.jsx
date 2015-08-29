import React, { Component, PropTypes } from 'react';
import ctx from 'classnames';
import './index.scss';
import List from 'List/';

export default class ViewBookmarks extends Component{

    /**
     * Props
     *
     */
    static propTypes = {
        relatedContent: PropTypes.array.isRequired,
        show: PropTypes.bool.isRequired,
        bookmarkRelatedContent: PropTypes.func.isRequired,
        visitRelatedContent: PropTypes.func.isRequired
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        let { relatedContent, show, bookmarkRelatedContent, visitRelatedContent } = this.props;

        return (
            <div className={ ctx('View ViewBookmarks', {
                'is-showed': show
            }) }>
                <div className='View_content'>
                    <h1>Bookmarks content</h1>
                    <List
                        relatedContent={ relatedContent }
                        bookmarkRelatedContent={ bookmarkRelatedContent }
                        visitRelatedContent={ visitRelatedContent }
                        loadMore={false} />
                </div>
            </div>
        );
    }
}
