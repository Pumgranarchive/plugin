import { handleActions } from 'redux-actions';
import {
    SEARCH_RELATED_CONTENT_REQUEST,
    SEARCH_RELATED_CONTENT_SUCCESS,
    LOAD_MORE_RELATED_CONTENT_REQUEST,
    LOAD_MORE_RELATED_CONTENT_SUCCESS,
    RESET_SEARCH_RELATED_CONTENT
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

const pages = handleActions({
    [LOAD_MORE_RELATED_CONTENT_REQUEST]: (state, action) => (
        state.map(page =>
            page.id === action.page_id ?
                { ...page, pendingLoadMoreData: true } :
                page
        )
    ),

    [LOAD_MORE_RELATED_CONTENT_SUCCESS]: (state, action) => (
        state.map(page =>
            page.id === action.page_id ?
                { ...page, pendingLoadMoreData: false } :
                page
        )
    ),

    [SEARCH_RELATED_CONTENT_REQUEST]: (state, action) => (
        state.map(page =>
            page.id === action.page_id ?
                { ...page, pendingSearchData: true, searchFilter: action.searchFilter } :
                page
        )
    ),

    [SEARCH_RELATED_CONTENT_SUCCESS]: (state, action) => (
        state.map(page =>
            page.id === action.page_id ?
                { ...page, pendingSearchData: false } :
                page
        )
    ),

    [RESET_SEARCH_RELATED_CONTENT]: (state, action) => (
        state.map(page =>
            page.id === action.page_id ?
                { ...page, searchFilter: '', pendingSearchData: false } :
                page
        )
    )
}, initialState);

export default pages;
