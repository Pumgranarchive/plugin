import Immutable from 'immutable';
import types from 'constants/ActionTypes';

const {
    GET_RELATED_CONTENT_REQUEST,
    GET_RELATED_CONTENT_SUCCESS,
    GET_RELATED_CONTENT_ERROR,
    SET_PAGE_SELECTED,
    SET_PAGE_FILTER
} = types;

var initialState = Immutable.fromJS({});

export default function views(state = initialState, action) {
    switch(action.type) {
        case GET_RELATED_CONTENT_REQUEST:

            state.map(page => state = state.mergeIn([page.get('_id')], { current: false }))

            // Set new page
            state = state.mergeIn([action.url], {
                _id: action.url,
                isFetching: true,
                current: true
            });

            break;


        case GET_RELATED_CONTENT_SUCCESS:
            state = state.mergeIn([action.url], {
                isFetching: false,
                filter: action.filter
            });

            let listOfRelatedContent = state.getIn([action.url, 'relatedContent', action.filter]),
                response = [];

            if(listOfRelatedContent != undefined) {
                response = listOfRelatedContent;
            }
            for(let item of action.response) {
                response = [
                    ...response,
                    item.content_uri
                ]
            };

            state = state.setIn([action.url, 'relatedContent', action.filter], response);

            break;


        case GET_RELATED_CONTENT_ERROR :
            state = state.mergeIn([action.url], {
                isFetching: false
            });
            break;

        case SET_PAGE_SELECTED :
            state.map(page => state = state.mergeIn([page.get('_id')], { current: false }));
            state = state.mergeIn([action.pageUrl], {
                current: true
            });
            break;

        case SET_PAGE_FILTER :
            state = state.mergeIn([action.pageUrl, 'filter'], action.filter)
            break;

        default: state = state;

    }

    return state;
}
