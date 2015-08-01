import * as types from 'constants/ActionTypes';

export function bookmarkRelatedContent(id){
    return {
        type: types.BOOKMARK_RELATED_CONTENT,
        id
    }
}

export function visitRelatedContent(id){
    return {
        type: types.VISIT_RELATED_CONTENT,
        id
    }
}
