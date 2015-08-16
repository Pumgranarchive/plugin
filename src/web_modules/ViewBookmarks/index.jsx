import React, {Component} from 'react';
import ctx from 'classnames';
import removeDuplicateContent from 'utils/removeDuplicateContent';
import './index.scss';
import List from 'List/';

export default class ViewBookmarks extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { relatedContent: [], show: false }
    static propTypes = {
        relatedContent: React.PropTypes.array.isRequired,
        show: React.PropTypes.bool.isRequired
    }


    /**
     * Render
     *
     */
    render(){
        let {relatedContent, actions, show} = this.props;
        relatedContent = removeDuplicateContent(relatedContent.filter(
            item => item.bookmarked === true
        ));

        return (
            <div className={ctx('View ViewBookmarks', {
                'is-showed': show
            })}>
                <div className='View_content'>
                    <h1>Bookmarks content</h1>
                    <List
                        relatedContent={ relatedContent }
                        bookmarkRelatedContent={ actions.bookmarkRelatedContent }
                        visitRelatedContent={ actions.visitRelatedContent }
                        loadMore={false} />
                </div>
            </div>
        );
    }
}
