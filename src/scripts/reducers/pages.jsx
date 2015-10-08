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

export default function views(state = initialState, action) {
    switch(action.type) {
        case GET_RELATED_CONTENT_REQUEST:
            state = state.set('isFetching', true);
            state = state.mergeIn(['items', action.url], {
                relatedContent: []
            })
            break;

        case GET_RELATED_CONTENT_SUCCESS:
            state = state.set('isFetching', false);

            let listOfRelatedContent = state.getIn(['items', action.url, 'relatedContent']),
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
            state = state.setIn(['items', action.url, 'relatedContent'], response);

            break;

        case GET_RELATED_CONTENT_ERROR :
            state = state.set('isFetching', false);
            break;

        default: state = state;
    }

    return state;
}
