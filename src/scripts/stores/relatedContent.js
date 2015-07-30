import { BOOKMARK_ITEM, VISIT_ITEM } from 'constants/ActionTypes';
import API from 'utils/api.ts';

var APIData = API.API.getLinksFromContent(window.location.href);

var initialState = [];
if (APIData && APIData.length > 0){
    for(let item of APIData){
    	initialState.push({
    		id: 0,
    		title: item.content_title,
    		description: item.content_summary,
    		website: 'mywebsite.com',
    		url: item.content_uri,
    		tags: ['tag1', 'tag2'],
    		bookmarked: false,
    		visited: false,
    		page_id: 0
    	});
    }
}

/*var initialState = [{
    id: 0,
    title: 'Title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
    website: 'website.com',
    url: 'http://website.com/article',
    tags: ['tag 1', 'tag1'],
    bookmarked: false,
    visited: false,
    page_id: 0
}];*/

export default function related_content(state = initialState, action){
    switch(action.type){
        case BOOKMARK_ITEM :
            return state.map(item =>
                item.id === action.id ?
                    { ...item, bookmarked: !item.bookmarked } :
                    item
            );

        case VISIT_ITEM:
            return state.map(item =>
                item.id === action.id ?
                    { ...item, visited: true } :
                    item
            );

        default:
            return state;
    }
}
