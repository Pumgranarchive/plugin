import * as types from 'constants/ActionTypes';
import { createAction } from 'redux-actions';
import {WebAPI} from 'utils/api.ts'; // ** __DEV__ ** //
//import WebAPI from 'utils/WebAPI'; // ** __PROD__ ** //

export function getRelatedContent(page_id, page_url) {
    return {
        types: [types.GET_RELATED_CONTENT_REQUEST, types.GET_RELATED_CONTENT_SUCCESS, types.GET_RELATED_CONTENT_ERROR],
        promise: WebAPI.getRelatedContent(page_id, page_url)
    }
}

export function loadMoreRelatedContent(page_id, page_url, searchFilter) {
    return {
        types: [types.LOAD_MORE_RELATED_CONTENT_REQUEST, types.LOAD_MORE_RELATED_CONTENT_SUCCESS, types.LOAD_MORE_RELATED_CONTENT_ERROR],
        promise: WebAPI.loadMoreRelatedContent(page_id, page_url, searchFilter),
        page_id
    }
}

export function searchRelatedContent(page_id, page_url, searchFilter) {
    return {
        types: [types.SEARCH_RELATED_CONTENT_REQUEST, types.SEARCH_RELATED_CONTENT_SUCCESS, types.SEARCH_RELATED_CONTENT_ERROR],
        promise: WebAPI.searchRelatedContent(page_id, page_url, searchFilter),
        page_id,
        searchFilter
    }
}

export function resetSearchRelatedContent(page_id, page_url) {
    return {
        type: types.RESET_SEARCH_RELATED_CONTENT,
        page_id
    }
}

export function bookmarkRelatedContent(url) {
    return {
        type: types.BOOKMARK_RELATED_CONTENT,
        url
    }
}

export function visitRelatedContent(url) {
    return {
        type: types.VISIT_RELATED_CONTENT,
        url
    }
}
