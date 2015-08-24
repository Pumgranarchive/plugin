import { handleActions } from 'redux-actions';
import {
    SEARCH_RELATED_CONTENT_REQUEST,
    SEARCH_RELATED_CONTENT_SUCCESS,
    LOAD_MORE_RELATED_CONTENT_REQUEST,
    LOAD_MORE_RELATED_CONTENT_SUCCESS,
    RESET_SEARCH_RELATED_CONTENT,
    GET_TITLE

} from 'constants/ActionTypes';

var initialState = [{
    id: 0,
    title: document.title,
    url: window.location.href,
    website: document.location.host,
    searchFilter: '',
    pendingLoadMoreData: false,
    pendingSearchData: false
}];

export const pages = handleActions({
    [LOAD_MORE_RELATED_CONTENT_REQUEST]: (state, action) => (
        state.map(page =>
            page.id === action.pageId ?
                { ...page, pendingLoadMoreData: true } :
                page
        )
    ),

    [LOAD_MORE_RELATED_CONTENT_SUCCESS]: (state, action) => (
        state.map(page =>
            page.id === action.pageId ?
                { ...page, pendingLoadMoreData: false } :
                page
        )
    ),

    [SEARCH_RELATED_CONTENT_REQUEST]: (state, action) => (
        state.map(page =>
            page.id === action.pageId ?
                { ...page, pendingSearchData: true, searchFilter: action.searchFilter } :
                page
        )
    ),

    [SEARCH_RELATED_CONTENT_SUCCESS]: (state, action) => (
        state.map(page =>
            page.id === action.pageId ?
                { ...page, pendingSearchData: false } :
                page
        )
    ),

    [RESET_SEARCH_RELATED_CONTENT]: (state, action) => (
        state.map(page =>
            page.id === action.pageId ?
                { ...page, searchFilter: '', pendingSearchData: false } :
                page
        )
    ),

    [GET_TITLE]: (state, action) => (
        state.map(page =>
            page.id === action.pageId ?
                { ...page, title: action.pageTitle} :
                page
        )
    )
}, initialState);
