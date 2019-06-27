import { init } from '@rematch/core';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware();

const store = init({
    models: {
    },
    redux: {
        middlewares: [thunk, saga]
    }
});

// Run sagas

export default store;