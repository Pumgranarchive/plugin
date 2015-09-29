import Immutable from 'immutable';
import {
    HANDLE_VIEW,
    GET_RELATED_CONTENT_REQUEST
} from 'constants/ActionTypes';

var initialState = Immutable.fromJS([]);

export default function router(state = initialState, action) {
    switch(action.type) {
        case HANDLE_VIEW:
            state = state.set('view', action.response.view);
            break;

        case GET_RELATED_CONTENT_REQUEST:
            state = state.set('view', action.response.view);
            break;

        default: state = state;
    }

    return state;
}
