import Immutable from 'immutable';
import {
    GET_RELATED_CONTENT_REQUEST,
    GET_RELATED_CONTENT_SUCCESS,
    GET_RELATED_CONTENT_ERROR
} from 'constants/ActionTypes';

var initialState = Immutable.fromJS({
    isFetching: false,
    items: {}
});

export default function relatedContent(state = initialState, action) {
    switch(action.type) {
        case GET_RELATED_CONTENT_REQUEST:
            state = state.set('isFetching', true);
            break;

        case GET_RELATED_CONTENT_SUCCESS:
            state = state.set('isFetching', false);
            state = state.mergeIn(['items'], action.response);
            break;

        case GET_RELATED_CONTENT_ERROR:
            state = state.set('isFetching', false);
            break;

        default: state = state;
    }

    return state;
}
