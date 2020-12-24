import {put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'
import {FETCH_HOME_DATA} from './constant'
import { bannersAction } from "./createActions";

function* fetchHomeData(action) {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata');
  //使用saga提供的put，执行action
  yield put(bannersAction(res.data.data.banner.list))
}
function* mySaga() {
  //takeEvery 每一个都会被执行
  //takeLatest: 只执行最新的一个
  yield takeEvery(FETCH_HOME_DATA,fetchHomeData)
  // yield all([

  // ])

}

export default mySaga