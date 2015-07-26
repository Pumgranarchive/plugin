import { BOOKMARK_ITEM, VISIT_ITEM } from 'constants/ActionTypes';
import API from 'utils/api.ts';

var initialState = [{
        id: 0,
        title: 'Title 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
        website: 'website.com',
        url: 'http://website.com/article',
        tags: ['tag 1', 'tag1'],
        bookmarked: false,
        visited: false,
        page_id: 0
    }, {
        id: 1,
        title: 'Title 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
        website: 'website.com',
        url: 'http://website.com/article',
        tags: ['tag 1', 'tag1'],
        bookmarked: false,
        visited: false,
        page_id: 0
    }, {
        id: 2,
        title: 'Title 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
        website: 'website.com',
        url: 'http://website.com/article',
        tags: ['tag 1', 'tag1'],
        bookmarked: true,
        visited: false,
        page_id: 0
    },{
        id: 3,
        title: 'Title 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
        website: 'website.com',
        url: 'http://website.com/article',
        tags: ['tag 1', 'tag1'],
        bookmarked: false,
        visited: false,
        page_id: 1
    }, {
        id: 4,
        title: 'Title 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
        website: 'website.com',
        url: 'http://website.com/article',
        tags: ['tag 1', 'tag1'],
        bookmarked: false,
        visited: false,
        page_id: 1
    }, {
        id: 5,
        title: 'Title 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
        website: 'website.com',
        url: 'http://website.com/article',
        tags: ['tag 1', 'tag1'],
        bookmarked: false,
        visited: false,
        page_id: 2
    }
];

// export default function related_content(state = API.API.GetLinksFromContent(), action){
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
