import { handleActions } from 'redux-actions';
import {
    BOOKMARK_RELATED_CONTENT,
    VISIT_RELATED_CONTENT,
    GET_RELATED_CONTENT_SUCCESS,
    LOAD_MORE_RELATED_CONTENT_SUCCESS,
    SEARCH_RELATED_CONTENT_SUCCESS
} from 'constants/ActionTypes';

export const relatedContent = handleActions({
    [GET_RELATED_CONTENT_SUCCESS]: (state, action) => ([
        ...state,
        ...action.response
    ]),

    [LOAD_MORE_RELATED_CONTENT_SUCCESS]: (state, action) => ([
        ...state,
        ...action.response
    ]),

    [SEARCH_RELATED_CONTENT_SUCCESS]: (state, action) => ([
        ...state,
        ...action.response
    ]),

    [BOOKMARK_RELATED_CONTENT]: (state, action) => (
        state.map(item =>
            item.url === action.url ?
                { ...item, bookmarked: !item.bookmarked } :
                item
        )
    ),

    [VISIT_RELATED_CONTENT]: (state, action) => (
        state.map(item =>
            item.url === action.url ?
                { ...item, visited: true } :
                item
        )
    )
}, []);
