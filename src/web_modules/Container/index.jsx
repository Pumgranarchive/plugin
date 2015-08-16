import React, {Component} from 'react';
import ctx from 'classnames';
import './index.scss';
import View from 'View/';
import ViewBookmarks from 'ViewBookmarks/';
import Footer from 'Footer/';
import Overlay from 'Overlay/';
import Toogle from 'Toogle/';

export default class Container extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { pages: [], relatedContent: [] }
    static propTypes = {
        pages: React.PropTypes.array.isRequired,
        relatedContent: React.PropTypes.array.isRequired
    }



    /**
     * States
     *
     */
    state = {
        currentPage: 0,
        bookmarksContent: false,
        show: false
    }



    /**
     * Go to bookmarks content
     *
     * @return setState
     */
    goToBookmarks(){
        return this.setState({
            bookmarksContent: !this.state.bookmarksContent
        });
    }



    /**
     * Go to an other view
     *
     * @param id (number)
     * @returb this.setState()
     */
    goTo(id){
        return this.setState({
            currentPage: id
        });
    }



    /**
     * Toogle
     *
     * @return this.setState()
     */
    toogle(){
        return this.setState({
            show: !this.state.show
        });
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        let { pages, actions, relatedContent } = this.props;
        let { currentPage, bookmarksContent, show } = this.state;

        return (
            <div>
                <div className={ ctx('Pumgrana', {
                    'is-disabled': !show
                })} ref='container'>
                    <Toogle
                        toogle={ ::this.toogle }
                        show={ show } />
                    <div className="Pumgrana_container">
                        <div className="Pumgrana_views">
                            { pages.map((page, i) => {
                                let position = 'current';
                                if((currentPage - i) > 0){
                                    position = 'before';
                                }
                                else if((currentPage - i) < 0){
                                    position = 'after';
                                }

                                return (
                                    <View page={ page }
                                          relatedContent={
                                               relatedContent.filter(
                                                   item => item.pageId === page.id
                                               )
                                          }
                                          lastPageId={ (pages.length - 1) }
                                          position={ position }
                                          goTo={ ::this.goTo }
                                          actions={ actions }
                                          key={ i } />
                                );
                            })}
                            <ViewBookmarks
                                relatedContent={ relatedContent }
                                show={ bookmarksContent }
                                actions={ actions } />
                        </div>
                    </div>
                    <Footer
                        relatedContent={ relatedContent }
                        goToBookmarks={ ::this.goToBookmarks } />
                </div>
                <Overlay
                    toogle={ ::this.toogle }
                    show={ show } />
            </div>
        );
    }
}
