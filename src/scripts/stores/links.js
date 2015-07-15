import { BOOKMARK_LINK } from 'constants/ActionTypes';

const initialState = [{
    id: 1,
    link: 'http://source.com/example1',
    url: 'source.com',
    title: 'Content 1 facilis num dipit, quat nim niate facilis',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit ...',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    bookmarked: false,
    visited: false
},{
    id: 2,
    link: 'http://source.com/example2',
    url: 'source.com',
    title: 'Content 2 facilis num dipit, quat nim niate facilis',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit ...',
    tags: ['Tag 1', 'Tag 2'],
    bookmarked: false,
    visited: false
}];

export default function links(state = initialState, action){
  switch(action.type){
        case BOOKMARK_LINK :
            return true;
        default:
            return state;
    }
}
