import { handleActions } from 'redux-actions';
import {
    TOOGLE_PLUGIN,
    TOOGLE_VIEW_BOOKMARKS,
    GO_TO_PAGE
} from 'constants/ActionTypes';

var initialState = {
    open: false,
    currentPage: 0,
    showViewBookmarks: false
};

export const plugin = handleActions({
    [TOOGLE_PLUGIN]: (state) => (
        { ...state, open: !state.open }
    ),
    [TOOGLE_VIEW_BOOKMARKS]: (state) => (
        { ...state, showViewBookmarks: !state.showViewBookmarks }
    ),
    [GO_TO_PAGE]: (state, action) => (
        { ...state, currentPage: action.pageId }
    )
}, initialState);
