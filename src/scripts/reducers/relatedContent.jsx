import Immutable from 'immutable';
import {
    GET_RELATED_CONTENT_REQUEST,
    GET_RELATED_CONTENT_SUCCESS
} from 'constants/ActionTypes';

var initialState = Immutable.fromJS([]);

export default function relatedContent(state = initialState, action) {
    switch(action.type) {
        case GET_RELATED_CONTENT_REQUEST:
            state = state.set('isFetching', true);
            break;

        case GET_RELATED_CONTENT_SUCCESS:
            state = state.set('isFetching', false);
            break;

        default: state = state;
    }

    return state;
}
