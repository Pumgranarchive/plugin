import Immutable from 'immutable';
import {
    GET_RELATED_CONTENT_REQUEST,
    GET_RELATED_CONTENT_SUCCESS,
    GET_RELATED_CONTENT_ERROR,
    SET_PAGE_SELECTED
} from 'constants/ActionTypes';

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
            });

            let listOfRelatedContent = state.getIn([action.url, 'relatedContent']),
                response = [];
            if(listOfRelatedContent != undefined) {
                response = [...listOfRelatedContent];
            }
            for(let key in action.response) {
                response = [
                    ...response,
                    key
                ]
            };
            state = state.setIn([action.url, 'relatedContent'], response);

            break;


        case GET_RELATED_CONTENT_ERROR :
            state = state.mergeIn([action.url], {
                isFetching: false
            });
            break;

        case SET_PAGE_SELECTED :
            state.map(page => state = state.mergeIn([page.get('_id')], { current: false }));
            state = state.mergeIn([action.pageId], {
                current: true
            });

            break;

        default: state = state;

    }

    return state;
}
