import { BOOKMARK_ITEM } from 'constants/ActionTypes';

var initialState = {
    data: [
        {
            page: {
                id: 0,
                title: 'Page 1',
                website: 'example.com',
            },
            related_content: [
                {
                    id: 1,
                    title: 'Title 2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
                    website: 'website.com',
                    url: 'http://website.com/article',
                    tags: ['tag 1', 'tag1'],
                    bookmarked: false,
                    visited: false
                }, {
                    id: 2,
                    title: 'Title 2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue consectetur ante hendrerit ...',
                    website: 'website.com',
                    url: 'http://website.com/article',
                    tags: ['tag 1', 'tag1'],
                    bookmarked: true,
                    visited: false
                }
            ]
        }
    ],
    current_page: {
        type: 'related_content',
        id: 0
    }
};

export default function data(state = initialState, action){

    switch(action.type){
        case BOOKMARK_ITEM :
            return state;

        default:
            return state;
    }
}
