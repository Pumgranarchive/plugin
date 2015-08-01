import { handleActions } from 'redux-actions';

var initialState = [{
    id: 0,
    title: document.title,
    website: document.location.host
}];

const pages = handleActions({}, initialState);
export default pages;