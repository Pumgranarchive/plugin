var initialState = [{
    id: 0,
    title: document.title,
    website: document.location.host
}];

export default function pages(state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}
