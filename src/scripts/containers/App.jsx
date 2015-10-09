import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRelatedContent } from 'actions/RelatedContentActions';
import Wrapper from 'Wrapper/';
import Footer from 'Footer/';
import ToogleButton from 'ToogleButton/';
import Views from 'Views/';
import ViewContainer from 'ViewContainer';
import Overlay from 'Overlay/';
import Iframe from 'Iframe/';

@connect(state => ({
    pages: state.pages
}))
export default class App extends Component{

    /**
     * State
     *
     */
    state = {
        stateToogle: 'close'
    }



    /**
     * Component did mount
     *
     * @return {func} Dispatch getRelatedContent()
     */
    componentWillMount() {
        return this.props.dispatch(getRelatedContent({
            url: document.location.href
        }));
    }



    /**
     * Show view bookmarks
     *
     */
    showViewBookmarks() {
        console.log('show');
    }



    /**
     * Open || close the plugin
     *
     * @return {func} setState
     */
    toogleAction() {
        return this.setState({
            stateToogle: (this.state.stateToogle == 'open' ? 'close' : 'open')
        });
    }



    /**
     * getPages()
     *
     * @return {array} response
     */
    getPages() {
        let response = [];

        this.props.pages.map(page => {
            response.push(page.get('_id'));
        });

        return response;
    }



    /**
     * Render <Wrapper /> component
     *
     * @return {JSX}
     */
    render() {
        let pages = this.getPages();

        return (
            <div>
                { pages.length > 1 &&
                    <Iframe src={ 'http://lemonde.fr' } />
                }
                <Overlay
                    state={ this.state.stateToogle }
                    toogleAction={ ::this.toogleAction } />
                <Wrapper state={ this.state.stateToogle }>
                    <ToogleButton
                        state={ this.state.stateToogle }
                        action={ ::this.toogleAction } />
                    <Views> {
                        pages.map((page, index) => (
                            <ViewContainer

                                key={ index }
                                pageUrl={ page } />
                        ))
                    } </Views>
                    <Footer
                        showViewBookmarks={ ::this.showViewBookmarks }
                        stateViewBookmarks={ 'disabled' } />
                </Wrapper>
            </div>
        );
    }

}
