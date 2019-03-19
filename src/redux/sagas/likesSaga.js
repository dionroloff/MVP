import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* likeContributedStory(action) {
    try {
        // console.log('in likeContributedStory saga, action.payload: ', action.payload);
        const serverResponse = axios.post('/like', action.payload);
        yield put({ type: 'GET_MY_CONTRIBUTIONS'});
        
    } catch(error) {
        console.log(`Error in likeContributedStory saga: ${error}`);
    }
}

function* likeTopStory(action) {
    try {
        // console.log('in likeTopStory saga, action.payload: ', action.payload);
        const serverResponse = axios.post('/like', action.payload);
        yield put({ type: 'GET_TOP_STORIES'});

    } catch(error) {
        console.log(`Error in likeTopStory saga: ${error}`);
    }
}

function* likesSaga() {
    yield takeLatest('LIKE_CONTRIBUTED_STORY', likeContributedStory);
    yield takeLatest('LIKE_TOP_STORY', likeTopStory);
}

export default likesSaga;