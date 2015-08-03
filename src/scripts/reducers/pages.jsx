import { handleActions } from 'redux-actions';
import { LOAD_MORE_RELATED_CONTENT_REQUEST, LOAD_MORE_RELATED_CONTENT_SUCCESS } from 'constants/ActionTypes';

var initialState = [{
    id: 0,
    title: document.title,
    url: window.location.href,
    website: document.location.host,
    pendingData: false
}];

const pages = handleActions({
    [LOAD_MORE_RELATED_CONTENT_REQUEST]: (state, action) => (
        state.map(page =>
            page.id === action.page_id ?
                { ...page, pendingData: true } :
                page
        )
    ),

    [LOAD_MORE_RELATED_CONTENT_SUCCESS]: (state, action) => (
        state.map(page =>
            page.id === action.page_id ?
                { ...page, pendingData: false } :
                page
        )
    )
}, initialState);

export default pages;
