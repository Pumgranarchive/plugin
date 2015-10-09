import Immutable from 'immutable';
import {
    GET_RELATED_CONTENT_REQUEST,
    GET_RELATED_CONTENT_SUCCESS,
    GET_RELATED_CONTENT_ERROR
} from 'constants/ActionTypes';

var initialState = Immutable.fromJS({});

export default function views(state = initialState, action) {
    switch(action.type) {
        case GET_RELATED_CONTENT_REQUEST:
            state = state.mergeIn([action.url], {
                _id: action.url,
                isFetching: true,
                relatedContent: []
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
                isFetching: false,
            });
            break;

        default: state = state;
    }

    return state;
}
