import * as types from 'constants/ActionTypes';

export function bookmarkLink(id){
    return {
        type: types.BOOKMARK_LINK,
        id
    }
}
