import * as types from 'constants/ActionTypes';
let WebAPI;
if(__DEV__){
    WebAPI = require('utils/WebAPI.jsx');
}
else{
    WebAPI = require('utils/api.ts').WebAPI;
}

const defaultLimit = 12;



/**
 * Get related content
 *
 * @param {string} filter
 * @return {object} promise
 */
export function getRelatedContent(page, start = 0, limit = defaultLimit, filter = '') {
    return {
        types: [types.GET_RELATED_CONTENT_REQUEST, types.GET_RELATED_CONTENT_SUCCESS, types.GET_RELATED_CONTENT_ERROR],
        promise: WebAPI.getRelatedContent({
            start,
            filter,
            limit
        })
    };
}
