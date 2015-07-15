import { BOOKMARK_LINK } from 'constants/ActionTypes';

const initialState = [{

}];

export default function links(state = initialState, action){
  switch(action.type){
        case BOOKMARK_LINK :
            return true;
        default:
            return state;
    }
}
