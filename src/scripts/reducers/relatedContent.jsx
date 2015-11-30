import Immutable from 'immutable';
import {
    GET_RELATED_CONTENT_REQUEST,
    GET_RELATED_CONTENT_SUCCESS,
    GET_RELATED_CONTENT_ERROR,
    BOOKMARK_RELATED_CONTENT
} from 'constants/ActionTypes';

var initialState = Immutable.fromJS({
    [location.href]: {
        title: document.title,
        description: '',
        domainName: location.hostname,
        bookmarked: false,
        visited: false
    }
});

export default function relatedContent(state = initialState, action) {
    switch(action.type) {
        case GET_RELATED_CONTENT_SUCCESS:
            let data = {};
            action.response.map(relatedContent => {
                data = {...data,
                    [relatedContent.content_uri]: {
                        title: relatedContent.content_title,
                        description: relatedContent.content_summary,
                        domainName: relatedContent.content_uri,
                        bookmarked: false,
                        visited: false
                    }
                };
            });
            state = state.merge(Immutable.fromJS(data));
            break;

        case BOOKMARK_RELATED_CONTENT:
            state = state.setIn([action.relatedContentId, 'bookmarked'], !state.getIn([action.relatedContentId, 'bookmarked']))
            break;

        default: state = state;
    }

    return state;
}
