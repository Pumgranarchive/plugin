import Immutable from 'immutable';
import types from 'constants/ActionTypes';
import { getDomainName } from 'utils/url';

const {
    REQUEST_RELATED_CONTENT,
    RECEIVE_RELATED_CONTENT,
    RECEIVE_RELATED_CONTENT_FAILURE,
    BOOKMARK_RELATED_CONTENT
} = types;

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
        case RECEIVE_RELATED_CONTENT:
            let data = {};
            action.response.map(relatedContent => {
                data = {...data,
                    [relatedContent.content_uri]: {
                        title: relatedContent.content_title,
                        description: relatedContent.content_summary,
                        domainName: getDomainName(relatedContent.content_uri),
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
