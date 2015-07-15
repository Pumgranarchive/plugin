import * as types from 'constants/ActionTypes';

export function bookmarkItem(id){
    console.log(types.BOOKMARK_ITEM);
    return {
        type: types.BOOKMARK_ITEM,
        id
    }
}
