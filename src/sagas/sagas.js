import { takeEvery } from 'redux-saga'
import { put,call } from 'redux-saga/effects'
import axios from 'axios'
import {GET_SALES_FINISHED, GET_TOKEN_FINISH, GET_TOKEN_ERROR, GET_JWT_BY_FACEBOOK} from '../actions/index';

const baseUrl = "https://collectorapi.herokuapp.com/";

export function* getJwtByFacebook(action) {
  yield put({ type: 'GET_TOKEN_STARTED' });
  var facebookAccessToken = action.payload;
  try {
    var url = `${baseUrl}getJwtByFacebook?facebookAccessToken=${facebookAccessToken}`;
    let { data } = yield call(axios.get, url);
    console.log(data);
    yield put({ type: GET_TOKEN_FINISH });
  } catch (error) {
    yield put({ type: GET_TOKEN_ERROR });
  }
}

export function* getJwtByGoogle() {

}

export function* getSales(action){
  var page = action.payload;
  try{
    var url = `${baseUrl}sales?page=${page}`;
    let res = yield call(axios.get, url);
    if(Array.isArray(res.data)){
      yield put({ type: GET_SALES_FINISHED, sales: res.data });
    }else{
      console.log("error in getSales:" + res.data);
    }
  }catch(error){
    console.log("error in getSales" + error);
  }
}

export function* watchGetJwtByFacebook() {
  yield* takeEvery(GET_JWT_BY_FACEBOOK, getJwtByFacebook)
}

export function* watchGetJwtByGoogle() {
  yield* takeEvery('GET_JWT_BY_GOOGLE', getJwtByGoogle)
}

export function* watchGetSales(){
  yield* takeEvery('GET_SALES', getSales)
}

export default function* rootSaga() {
  yield [
    watchGetJwtByFacebook(),
    watchGetJwtByGoogle(),
    watchGetSales()
  ]
}