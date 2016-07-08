import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import {GET_SALES_FINISHED, GET_JWT_BY_FACEBOOK, SPINNER_SHOW, SPINNER_HIDE} from '../actions/index';
import realm from '../realm/realm.js';

const baseUrl = "https://collectorapi.herokuapp.com/";

export function* getJwtByFacebook(action) {
  yield put({ type: SPINNER_SHOW });
  var facebookAccessToken = action.payload.facebookAccessToken;
  var goToWhenFinish = action.payload.goToWhenFinish;
  try {
    var url = `${baseUrl}getJwtByFacebook?facebookAccessToken=${facebookAccessToken}`;
    let res = yield call(axios.get, url);
    var jwtToken = res.data;
    setJWTTokenInRealm(jwtToken);
    yield put({ type: SPINNER_HIDE });
  } catch (error) {
    yield put({ type: SPINNER_HIDE });
  }
}

export function* getJwtByGoogle() {

}

export function* getSales(action) {
  var page = action.payload;
  try {
    var url = `${baseUrl}sales?page=${page}`;
    let res = yield call(axios.get, url);
    if (Array.isArray(res.data)) {
      yield put({ type: GET_SALES_FINISHED, sales: res.data });
    } else {
      console.log("Error in getSles()");
      console.log(res.data);
    }
  } catch (error) {
    console.log("Error in getSles()");
    console.log(error);
  }
}

export function* watchGetJwtByFacebook() {
  yield* takeEvery(GET_JWT_BY_FACEBOOK, getJwtByFacebook)
}

export function* watchGetJwtByGoogle() {
  yield* takeEvery('GET_JWT_BY_GOOGLE', getJwtByGoogle)
}

export function* watchGetSales() {
  yield* takeEvery('GET_SALES', getSales)
}

export default function* rootSaga() {
  yield [
    watchGetJwtByFacebook(),
    watchGetJwtByGoogle(),
    watchGetSales()
  ]
}

function setJWTTokenInRealm(jwtToken) {

  realm.write(() => {
    realm.create('UserInfo', { jwtToken: jwtToken, single:'single'}, true);
  });
}