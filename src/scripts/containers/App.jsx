import React, { Component } from 'react';
import { connect } from 'react-redux';
import types from 'constants/ActionTypes';
import { getRelatedContent } from 'actions/RelatedContentActions';
import { select, css } from 'utils/dom';
import Wrapper from 'Wrapper/';
import Footer from 'Footer/';
import ToogleButton from 'ToogleButton/';
import Views from 'Views/';
import ViewContainer from 'ViewContainer';
import ViewBookmarks from 'ViewBookmarks/';
import Overlay from 'Overlay/';
import Iframe from 'Iframe/';

class App extends Component{

    state = {
        state: 'close',
        showViewBookmarks: false
    }



    /**
     * Connect app.js to popup.js
     * with chrome.runtime.onMessage
     *
     */
    componentDidMount() {
        chrome.runtime.onMessage.addListener(action => {
            switch (action.type) {
                case types.DISABLE_FOR_THIS_PAGE: // Set localStorage
                    localStorage.setItem('pumgrana', `${types.DISABLE_FOR_THIS_PAGE};${location.href}`);
                    break;

                case types.DISABLE_FOR_THIS_WEBSITE: // Set localStorage
                    localStorage.setItem('pumgrana', types.DISABLE_FOR_THIS_WEBSITE);
                    break;
            }

            return this.setState({
                state: 'disabled'
            })
        });
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
        if(this.props.pages.size < 2) { // no iframe
            if(this.state.state == 'open') {
                select('html, body')::css({
                    height: 'inherit',
                    overflow: 'auto'
                });
            }
            else {
                select('html, body')::css({
                    height: '100vh',
                    overflow: 'hidden'
                });
            }
        }

        return this.setState({
            state: (this.state.state == 'open' ? 'close' : 'open')
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
     * getCurrentWebsite()
     *
     * @return {string}
     */
    getCurrentWebsite() {
        if(this.props.pages.size > 0) {
            return this.props.pages.filter(
                page => page.get('current')
            ).first().get('_id');
        }
    }


    /**
     * getNbreOfRelatedContent()
     *
     * @return {integer}
     */
    getNbreOfRelatedContent() {
        return this.props.relatedContent.size - 1;
    }



    /**
     * Render <Wrapper /> component
     *
     * @return {JSX}
     */
    render() {
        let pages = this.getPages(),
            currentWebsite = this.getCurrentWebsite(),
            stateViewBookmarks = this.getStateViewBookmarks(),
            nbreOfBookmarkedRelatedContent = this.getNbreOfBookmarkedRelatedContent(),
            getNbreOfRelatedContent = this.getNbreOfRelatedContent();

        return (
            <div>
                { pages.length > 1 &&
                    <Iframe src={ currentWebsite } />
                }
                <Overlay
                    state={ this.state.state }
                    toogleAction={ ::this.toogleAction } />
                { this.state.state !== 'disabled' &&
                    <Wrapper state={ this.state.state } noResultats={ getNbreOfRelatedContent } >
                        <ToogleButton
                            noResultats={ getNbreOfRelatedContent }
                            state={ this.state.state }
                            action={ ::this.toogleAction } />
                        <Views>
                            <ViewBookmarks state={ ( this.state.showViewBookmarks ? 'enable' : 'disabled' ) }>
                                <ViewContainer type='bookmarks' />
                            </ViewBookmarks>
                            { pages.map((page, index) => (
                                <ViewContainer
                                  key={ index }
                                  type='page'
                                  pageUrl={ page } />
                            )) }
                        </Views>
                        <Footer
                          toogleViewBookmarks={ ::this.toogleViewBookmarks }
                          stateViewBookmarks={ stateViewBookmarks } />
                    </Wrapper>
                }
            </div>
        );
    }

}

export default connect(state => ({
    pages: state.pages,
    relatedContent: state.relatedContent
}))(App);
