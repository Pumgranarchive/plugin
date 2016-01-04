import types from 'constants/ActionTypes';
import WebAPI from './../api/relatedContent';


/*
 * Request related content
 *
 * @param {string} url
 * @param {int} offset
 * @param {string} filter
 * @return {object}
 */
export function requestRelatedContent(
    {
        url = document.location.href,
        offset = 0,
        filter = ''
    } = {}
) {
    return {
        type: types.REQUEST_RELATED_CONTENT,
        options: { url, offset, filter }
    }
}



/*
 * Receive related content
 *
 * @param {object} response
 * @param {object} options
 * @return {object}
 */
export function receiveRelatedContent(response, options) {
    return {
        type: types.RECEIVE_RELATED_CONTENT
    }
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
