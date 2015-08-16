import * as types from 'constants/ActionTypes';

export function tooglePlugin() {
    return {
        type: types.TOOGLE_PLUGIN
    };
}

export function toogleViewBookmarks() {
    return {
        type: types.TOOGLE_VIEW_BOOKMARKS
    };
}

export function goToPage(pageId) {
    return {
        type: types.GO_TO_PAGE,
        pageId
    };
}
