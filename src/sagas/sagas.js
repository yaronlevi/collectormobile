import { takeEvery } from 'redux-saga'
import { put,call } from 'redux-saga/effects'
import axios from 'axios'

const baseUrl = "https://collectorapi.herokuapp.com/";

export function* getJwtByFacebook(action) {
  yield put({ type: 'GET_TOKEN_STARTED' });
  var facebookAccessToken = action.payload;
  try {
    var url = `${baseUrl}getJwtByFacebook?facebookAccessToken=${facebookAccessToken}`;
    let { data } = yield call(axios.get, url);
    yield put({ type: 'GET_TOKEN_FINISH' });
  } catch (error) {
    yield put({ type: 'GET_TOKEN_ERROR' });
  }
}

export function* getJwtByGoogle() {

}

export function* watchGetJwtByFacebook() {
  yield* takeEvery('GET_JWT_BY_FACEBOOK', getJwtByFacebook)
}

export function* watchGetJwtByGoogle() {
  yield* takeEvery('GET_JWT_BY_GOOGLE', getJwtByGoogle)
}

export default function* rootSaga() {
  yield [
    watchGetJwtByFacebook(),
    watchGetJwtByGoogle()
  ]
}