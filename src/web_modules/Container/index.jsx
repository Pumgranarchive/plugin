import React, { Component, PropTypes } from 'react';
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
    static defaultProps = {
        pages: [],
        relatedContent: [],
        plugin: {}
    }
    static propTypes = {
        pages: PropTypes.array.isRequired,
        relatedContent: PropTypes.array.isRequired,
        plugin: PropTypes.object.isRequired
    }



    /**
     * Toogle
     *
     * @return tooglePlugin()
     */
    tooglePlugin(){
        return this.props.actions.tooglePlugin();
    }



    /**
     * Go to an other page
     *
     * @param id (number)
     * @returb goToPage()
     */
    goToPage(id){
        return this.props.actions.goToPage(id);
    }



    /**
     * Go to bookmarks content
     *
     * @return toogleViewBookmarks()
     */
    goToBookmarksView(){
        return this.props.actions.toogleViewBookmarks();
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        let { actions, pages, relatedContent, plugin } = this.props;

        return (
            <div>
                <div className={ ctx('Pumgrana', {
                    'is-disabled': !plugin.open
                })} ref='container'>
                    <Toogle
                        action={ ::this.tooglePlugin }
                        show={ plugin.open } />
                    <div className="Pumgrana_container">
                        <div className="Pumgrana_views">
                            { pages.map((page, i) => {
                                let position = 'current';
                                if((plugin.currentPage - i) > 0){
                                    position = 'before';
                                }
                                else if((plugin.currentPage - i) < 0){
                                    position = 'after';
                                }

                                return (
                                    <View page={ page }
                                          relatedContent={
                                               relatedContent.filter(
                                                   item => item.pageId == page.id
                                               )
                                          }
                                          lastPageId={ (pages.length - 1) }
                                          position={ position }
                                          goTo={ ::this.goToPage }
                                          actions={ actions }
                                          key={ i } />
                                );
                            })}
                            <ViewBookmarks
                                relatedContent={ relatedContent }
                                show={ plugin.showViewBookmarks }
                                actions={ actions } />
                        </div>
                    </div>
                    <Footer
                        relatedContent={ relatedContent }
                        goToBookmarks={ ::this.goToBookmarksView } />
                </div>
                <Overlay
                    toogle={ ::this.tooglePlugin }
                    show={ plugin.open } />
            </div>
        );
    }
}
