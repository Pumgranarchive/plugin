var initialState = [{
    id: 0,
    title: 'Page 1',
    website: 'example.com',
}];

export default function pages(state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}
