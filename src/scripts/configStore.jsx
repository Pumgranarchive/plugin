import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'middlewares/promiseMiddleware';
import * as reducers from 'reducers/';

let cs = createStore;
if(__DEBUG__){
    cs = compose(
        require('DevTools').default.instrument(),
    )(createStore);
}

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(cs);
const store = createStoreWithMiddleware(combineReducers({
    ...reducers
}));

export default function configureStore() {
    if (__DEV__) {
        module.hot.accept('./reducers/index', () => {
            const nextRootReducer = require('./reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
