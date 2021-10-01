import { put, takeLatest, all } from 'redux-saga/effects';


function* fetchLists() {
    const json = yield fetch('http://localhost:3000/restaurants')
        .then(response => response.json(), );    

    yield put({ type: "LISTS_RECEIVED", json: json});
}


function* actionWatcher() {
    yield takeLatest('GET_LISTS', fetchLists)
}


export default function* rootSaga() {
    yield all([
    actionWatcher(),
    ]);
}
