import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bookmarkRelatedContent, requestRelatedContent, setPageSelected, setPageFilter } from 'actions/RelatedContentActions';
import View from 'View/';
import Item from 'View/Item/';
var timer;

class ViewContainer extends Component {

    /**
     * getPageInformations
     *
     */
    getPageInformations() {
        let page = this.props.relatedContent.get(this.props.pageUrl),
            response = {};

        if(page !== undefined) {
            response = page.toJS();
        }

        return response;
    }



    /**
     * requestRelatedContent()
     *
     * @return {array} response
     */
    requestRelatedContent() {
        let response = [];

        if(this.props.type == 'bookmarks') {
            this.props.relatedContent.filter(
                relatedContent => relatedContent.get('bookmarked')
            ).map((relatedContent, key) => {
                response = [
                    ...response,
                    {
                        _id: key,
                        ...relatedContent.toJS()
                    }
                ]
            });
        }
        else { // type == 'page'
            let page = this.props.pages.get(this.props.pageUrl);

            if(page.get('relatedContent') !== undefined) {
                page.get('relatedContent').get(page.get('filter')).map(relatedContent => {
                    response = [
                        ...response,
                        {
                            _id: relatedContent,
                            ...this.props.relatedContent.get(relatedContent).toJS()
                        }
                    ];
                });
            }
        }


        return response;
    }


    /**
     * Search related content
     *
     * @param {string} filter
     * @return {func} dispatch requestRelatedContent()
     */
    searchRelatedContent(filter) {
        clearTimeout(timer);
        if(filter != this.props.pages.get(this.props.pageUrl).get('filter')) {
            if(filter != '' && this.props.pages.get(this.props.pageUrl).get('relatedContent').get(filter) == undefined) {
                timer = setTimeout(() => {
                    return this.props.dispatch(requestRelatedContent({
                        filter,
                        url: this.props.pageUrl,
                        offset: (this.requestRelatedContent().length + 1)
                    }));
                }, 1300);
            }
            else {
                return this.props.dispatch(setPageFilter(this.props.pageUrl, filter));
            }
        }

        return false;
    }



    /**
     * Bookmark related content
     *
     * @param {integer} relatedContentId
     * @return {func} bookmarkRelatedContent()
     */
    bookmarkRelatedContent(relatedContentId) {
        return this.props.dispatch(bookmarkRelatedContent(relatedContentId))
    }



    /**
     * Bookmark page
     *
     * @return {func} relatedContentId()
     */
    bookmarkPage() {
        return this.props.dispatch(bookmarkRelatedContent(this.props.pageUrl))
    }



    /**
     * loadMoreRelatedContent()
     *
     * @return {func} requestRelatedContent()
     */
    loadMoreRelatedContent() {
        return this.props.dispatch(requestRelatedContent({
            url: this.props.pageUrl,
            offset: (this.requestRelatedContent().length + 1)
        }));
    }



    /**
     * clickOnRelatedContent
     *
     * @param {string} relatedContentId
     */
    clickOnRelatedContent(relatedContentId) {
        let page = this.props.pages.get(relatedContentId);

        if(page === undefined) {
            if(window.location.protocol == relatedContentId.substring(0, 5)) {
                return this.props.dispatch(requestRelatedContent({
                    url: relatedContentId
                }));
            }
            else {
                window.location.href = relatedContentId;
            }
        }
        else {
            return this.props.dispatch(setPageSelected(relatedContentId));
        }
    }


    /**
     * hasAncestors() && hasParents()
     *
     * @return {bool}
     */
    hasAncestors() {
        let i = 0,
            founded = false;

        if(this.props.pageUrl !== undefined) {
            this.props.pages.map((page, index) => {
                if(index == this.props.pageUrl){
                    founded = true;
                }

                if(!founded) {
                    i++;
                }
            });
        }

        if(i > 0) {
            return true;
        }

        return false;
    }

    hasParents() {
        let i = 0,
            founded = false;

        if(this.props.pageUrl !== undefined) {
            this.props.pages.reverse().map((page, index) => {
                if(index == this.props.pageUrl){
                    founded = true;
                }

                if(!founded) {
                    i++;
                }
            });
        }

        if(i > 0) {
            return true;
        }

        return false;
    }



    /**
     * goTo()
     *
     * @param {string} direction
     * @param dispatch setPageSelected()
     */
    goTo(direction) {
        let response,
            cache;

        switch (direction) {
            case 'back':
                if(this.hasAncestors()) {
                    this.props.pages.map(page => {
                        if(this.props.pageUrl == page.get('_id')) {
                            response = cache;
                        }
                        cache = page.get('_id');
                    });
                }

                break;

            case 'next':
                if(this.hasParents()) {
                    this.props.pages.reverse().map(page => {
                        if(this.props.pageUrl == page.get('_id')) {
                            response = cache;
                        }
                        cache = page.get('_id');
                    });
                }

                break;

            default:
                response = null;
        }

        return this.props.dispatch(setPageSelected(response))
    }



    /**
     * isInsideWrapper(
     *
     */
    isInsideWrapper() {
        let response = true,
            currentPage = null;

        // Get current page
        this.props.pages.map(page => {
            if(page.get('_id') == this.props.pageUrl && currentPage !== null) {
                response = false;
            }
            if(page.get('current')) {
                currentPage = page.get('_id');
            }
        });

        return response;
    }



    /**
     * Render
     *
     * @return {jsx}
     */
    render() {
        let relatedContent = this.requestRelatedContent(),
            isFetching = (this.props.type == 'bookmarks' ? false : this.props.pages.get(this.props.pageUrl).get('isFetching')),
            getPageInformations = this.getPageInformations(),
            hasAncestors = this.hasAncestors(),
            hasParents = this.hasParents(),
            isInsideWrapper = this.isInsideWrapper();

        return (
            <View
                searchRelatedContent={ ::this.searchRelatedContent }
                goTo={ ::this.goTo }
                bookmarkPage={ ::this.bookmarkPage }
                loadMoreRelatedContent={ ::this.loadMoreRelatedContent }
                type={ this.props.type }
                insideWrapper={ isInsideWrapper }
                pageInformations={ getPageInformations }
                searchFilter={ (this.props.type == 'bookmarks' ? null : this.props.pages.get(this.props.pageUrl).get('filter')) }
                current={ (this.props.type == 'bookmarks' ? false : this.props.pages.get(this.props.pageUrl).get('current')) }
                hasAncestors={ hasAncestors }
                hasParents={ hasParents }
                nrbOfRelatedContent={ relatedContent.length }
                isFetching={ isFetching } > {
                    relatedContent.map((item, index) => (
                        <Item
                            key={ index }
                            { ...item }
                            paginated={( this.props.type == 'bookmarks' ? false : true )}
                            clickOnRelatedContent={ ::this.clickOnRelatedContent }
                            bookmarkRelatedContent={ ::this.bookmarkRelatedContent } />
                    ))}
            </View>
        );
    }

}

ViewContainer.PropTypes = {
    pageUrl: PropTypes.string,
    pages: PropTypes.object.isRequired
};

export default connect(state => ({
    pages: state.pages,
    relatedContent: state.relatedContent
}))(ViewContainer);
