import * as types from 'constants/ActionTypes';
// import {WebAPI} from 'utils/api.ts'; // ** __PROD__ ** //
import WebAPI from 'utils/WebAPI'; // ** __DEV__ ** //

export function getRelatedContent(pageId, pageUrl) {
    return {
        types: [types.GET_RELATED_CONTENT_REQUEST, types.GET_RELATED_CONTENT_SUCCESS, types.GET_RELATED_CONTENT_ERROR],
        promise: WebAPI.getRelatedContent(pageId, pageUrl)
    };
}

export function loadMoreRelatedContent(pageId, pageUrl, searchFilter) {
    return {
        types: [types.LOAD_MORE_RELATED_CONTENT_REQUEST, types.LOAD_MORE_RELATED_CONTENT_SUCCESS, types.LOAD_MORE_RELATED_CONTENT_ERROR],
        promise: WebAPI.loadMoreRelatedContent(pageId, pageUrl, searchFilter),
        pageId
    };
}

export function searchRelatedContent(pageId, pageUrl, searchFilter) {
    return {
        types: [types.SEARCH_RELATED_CONTENT_REQUEST, types.SEARCH_RELATED_CONTENT_SUCCESS, types.SEARCH_RELATED_CONTENT_ERROR],
        promise: WebAPI.searchRelatedContent(pageId, pageUrl, searchFilter),
        pageId,
        searchFilter
    };
}

export function resetSearchRelatedContent(pageId) {
    return {
        type: types.RESET_SEARCH_RELATED_CONTENT,
        pageId
    };
}

export function bookmarkRelatedContent(url) {
    return {
        type: types.BOOKMARK_RELATED_CONTENT,
        url
    };
}

export function visitRelatedContent(url) {
    return {
        type: types.VISIT_RELATED_CONTENT,
        url
    };
}
