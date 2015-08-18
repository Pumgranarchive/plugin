import React, { Component, PropTypes } from 'react';
import ctx from 'classnames';
import './index.scss';
import Views from 'Views/';
import Footer from 'Footer/';
import Overlay from 'Overlay/';
import Toogle from 'Toogle/';

export default class Container extends Component{

    /**
     * Props
     *
     */
    static propTypes = {
        pages: PropTypes.array.isRequired,
        relatedContent: PropTypes.array.isRequired,
        plugin: PropTypes.object.isRequired,
        hasBookmarks: PropTypes.bool.isRequired
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
     * Go to the view of bookmarks
     *
     * @return goToViewBookmarks()
     */
    goToViewBookmarks(){
        if(this.props.hasBookmarks){
            return this.props.actions.toogleViewBookmarks();
        }
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        let { pages, relatedContent, plugin, hasBookmarks } = this.props;
        let hasResultats = (relatedContent.length > 0 ? true : false );

        return (
            <div>
                <div className={ ctx('Pumgrana', {
                    'is-disabled': !plugin.open,
                    'is-discreet': !hasResultats
                })} ref='container'>
                    <Toogle
                        hasResultats={ hasResultats }
                        action={ ::this.tooglePlugin }
                        show={ plugin.open } />
                    <Views
                        relatedContent={ relatedContent }
                        pages={ pages }
                        currentPage={ plugin.currentPage }
                        goToPage={ ::this.goToPage } />
                    <Footer
                        hasBookmarks={ hasBookmarks }
                        showViewBookmarks={ plugin.showViewBookmarks }
                        goToViewBookmarks={ ::this.goToViewBookmarks } />
                </div>
                <Overlay
                    clickAction={ ::this.tooglePlugin }
                    show={ plugin.open } />
            </div>
        );
    }
}
