import React, {Component} from 'react';
import './index.scss';
import View from 'View/';
import ViewBookmarks from 'ViewBookmarks/';
import Footer from 'Footer/';

export default class Container extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { pages: [], related_content: [], actions: {} }
    static propTypes = {
        pages: React.PropTypes.array.isRequired,
        related_content: React.PropTypes.array.isRequired,
        actions: React.PropTypes.object.isRequired
    }



    /**
     * States
     *
     */
    state = {
        current_page: 0,
        bookmarks_content: false
    }



    /**
     * Go to bookmarks content
     *
     * @return setState
     */
    goToBookmarks(){
        return this.setState({
            bookmarks_content: !this.state.bookmarks_content
        });
    }



    /**
     * Go to an other view
     *
     */
    goTo(id){
        return this.setState({
            current_page: id
        })
    }



    /**
     * Render
     *
     */
    render(){
        let { pages, actions, related_content } = this.props;
        let { current_page, bookmarks_content } = this.state;

        return (
            <div className="Pumgrana">
                <div className="Pumgrana_views">
                    { pages.map((page, i) => {
                        let position = 'current';
                        if((current_page - i) > 0){
                            position = 'before';
                        }
                        else if((current_page - i) < 0){
                            position = 'after';
                        }

                        return (
                            <View page={ page }
                                  related_content={
                                       related_content.filter(
                                           item => item.page_id === page.id
                                       )
                                  }
                                  lastPageId={ (pages.length - 1) }
                                  position={ position }
                                  goTo={ ::this.goTo }
                                  actions={ actions } />
                        );
                    })}
                    <ViewBookmarks
                        related_content={ related_content }
                        show={ bookmarks_content }
                        actions={ actions } />
                </div>
                <Footer related_content={ related_content } goToBookmarks={ ::this.goToBookmarks } />
            </div>
        );
    }
}
