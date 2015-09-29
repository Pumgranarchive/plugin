import * as types from 'constants/ActionTypes';
let WebAPI;
if(__DEV__){
    WebAPI = require('utils/WebAPI.jsx');
}
else{
    WebAPI = require('utils/api.ts').WebAPI;
}



/**
 * Get related content
 *
 * @param {object} params
 * @return {object} promise
 */
export function getRelatedContent(
    {
        url = document.location.href,
        start = 0,
        limit = 12,
        filter = ''
    } = {}
) {
   return {
        types: [types.GET_RELATED_CONTENT_REQUEST, types.GET_RELATED_CONTENT_SUCCESS, types.GET_RELATED_CONTENT_ERROR],
        promise: WebAPI.getRelatedContent({url, start, filter, limit}),
        url
    };
}
