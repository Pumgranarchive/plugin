import React, {Component} from 'react';
import ctx from 'classnames';
import './index.scss';
import List from 'List/';

export default class ViewBookmarks extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { related_content: [], actions: {}, show: false }
    static propTypes = {
        related_content: React.PropTypes.array.isRequired,
        show: React.PropTypes.bool.isRequired,
        actions: React.PropTypes.object.isRequired
    }



    /**
     * States
     *
     */
    state = {
    }


    /**
     * Render
     *
     */
    render(){
        let {related_content, actions, show} = this.props;

        return (
            <div className={ctx("View ViewBookmarks", {
                "is-showed": show
            })}>
                <div className="View_content">
                    <h1>Bookmarks content</h1>
                    <List
                        related_content={
                             related_content.filter(
                                 item => item.bookmarked === true
                             )
                        }
                        bookmarkItem={ actions.bookmarkItem }
                        visitItem={ actions.visitItem }
                        loadMore={false} />
                </div>
            </div>
        );
    }
}
