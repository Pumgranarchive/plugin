import * as types from 'constants/ActionTypes';
import { createAction } from 'redux-actions';
import WebAPI from 'utils/WebAPI'

export function getRelatedContent(page_id, page_url) {
    return {
        types: [types.GET_RELATED_CONTENT_REQUEST, types.GET_RELATED_CONTENT_SUCCESS, types.GET_RELATED_CONTENT_ERROR],
        promise: WebAPI.getRelatedContent(page_id, page_url)
    }
}

export function loadMoreRelatedContent(page_id, page_url) {
    return {
        types: [types.LOAD_MORE_RELATED_CONTENT_REQUEST, types.LOAD_MORE_RELATED_CONTENT_SUCCESS, types.LOAD_MORE_RELATED_CONTENT_ERROR],
        promise: WebAPI.loadMoreRelatedContent(page_id, page_url),
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
