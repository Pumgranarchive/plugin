var initialState = [{
    id: 0,
    title: 'Page 1',
    website: 'example.com'
},{
    id: 1,
    title: 'Page 2',
    website: 'example.com'
},{
    id: 2,
    title: 'Page 3',
    website: 'example.com'
}];

export default function pages(state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}
