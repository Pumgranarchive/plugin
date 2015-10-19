import * as types from 'constants/ActionTypes';
let WebAPI;
if(__DEV__){
    WebAPI = require('utils/WebAPI.jsx');
}
else{
    WebAPI = require('utils/api.ts').WebAPI;
}



/**
 * Get related content
 *
 * @param {object} params
 * @return {object} promise
 */
export function getRelatedContent(
    {
        url = document.location.href,
        offset = 0,
        filter = ''
    } = {}
) {
   return {
        types: [types.GET_RELATED_CONTENT_REQUEST, types.GET_RELATED_CONTENT_SUCCESS, types.GET_RELATED_CONTENT_ERROR],
        promise: WebAPI.getRelatedContent({url, offset, filter}),
        url,
        offset,
        filter
    };
}



/**
 * Bookmark a related content
 *
 * @param {integer} relatedContentId
 * @return {object}
 */
export function bookmarkRelatedContent(relatedContentId) {
    return {
        type: types.BOOKMARK_RELATED_CONTENT,
        relatedContentId
    }
}



/**
 * Set page selected
 *
 * @param {string} pageUrl
 * @return {object}
 */
export function setPageSelected(pageUrl) {
    return {
        type: types.SET_PAGE_SELECTED,
        pageUrl
    }
}



/**
 * Set page filter
 *
 * @param {string} pageUrl
 * @return {object}
 */
export function setPageFilter(pageUrl, filter) {
    return {
        type: types.SET_PAGE_FILTER,
        pageUrl,
        filter
    }
}
