import { put, takeLatest, all } from 'redux-saga/effects';


function* fetchLists() {
    const json = yield fetch('https://mocki.io/v1/dd795712-8846-489f-8ad7-6193cfffbb92')
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
