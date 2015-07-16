import * as types from 'constants/ActionTypes';

export function bookmarkItem(id){
    return {
        type: types.BOOKMARK_ITEM,
        id
    }
}

export function visitItem(id){
    return {
        type: types.VISIT_ITEM,
        id
    }
}
