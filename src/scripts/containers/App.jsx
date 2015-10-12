import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRelatedContent } from 'actions/RelatedContentActions';
import Wrapper from 'Wrapper/';
import Footer from 'Footer/';
import ToogleButton from 'ToogleButton/';
import Views from 'Views/';
import ViewContainer from 'ViewContainer';
import ViewBookmarks from 'ViewBookmarks/';
import Overlay from 'Overlay/';
import Iframe from 'Iframe/';

@connect(state => ({
    pages: state.pages,
    relatedContent: state.relatedContent
}))
export default class App extends Component{

    /**
     * State
     *
     */
    state = {
        stateToogle: 'close',
        showViewBookmarks: false
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
     * Toogle view bookmarks
     *
     * @return setState()
     */
    toogleViewBookmarks() {
        let response;

        if(this.state.showViewBookmarks || this.getNbreOfBookmarkedRelatedContent() == 0) {
            response = false;
        }
        else {
            response = true;
        }

        return this.setState({
            showViewBookmarks: response
        });
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
     * getNbreOfBookmarkedRelatedContent()
     *
     * @return {integer} response
     */
    getNbreOfBookmarkedRelatedContent() {
        return this.props.relatedContent.filter(
            relatedContent => relatedContent.get('bookmarked')
        ).size;
    }



    /**
     * getStateViewBookmarks()
     *
     * @return {string} response
     */
    getStateViewBookmarks() {
        let response = 'enabled';

        if(this.getNbreOfBookmarkedRelatedContent() == 0) {
            response = 'disabled';
        }

        if(this.state.showViewBookmarks) {
            response = 'clicked';
        }

        return response;
    }



    /**
     * Render <Wrapper /> component
     *
     * @return {JSX}
     */
    render() {
        let pages = this.getPages(),
            stateViewBookmarks = this.getStateViewBookmarks(),
            nbreOfBookmarkedRelatedContent = this.getNbreOfBookmarkedRelatedContent();

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
                    <Views>
                        <ViewBookmarks state={ ( this.state.showViewBookmarks ? 'enable' : 'disabled' ) }>
                            <ViewContainer
                                type='bookmarks' />
                        </ViewBookmarks>
                    {
                        pages.map((page, index) => (
                            <ViewContainer
                                key={ index }
                                type='page'
                                pageUrl={ page } />
                        ))
                    } </Views>
                    <Footer
                        toogleViewBookmarks={ ::this.toogleViewBookmarks }
                        stateViewBookmarks={ stateViewBookmarks } />
                </Wrapper>
            </div>
        );
    }

}
