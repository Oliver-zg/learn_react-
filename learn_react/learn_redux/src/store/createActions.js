import axios  from 'axios'
import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS,
  FETCH_HOME_DATA
} from './constant'

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num
})

export const subAction = (num) => ({
  type: SUB_NUMBER,
  num
})

export const increAction = () => ({
  type: INCREMENT
})
export const decreAction = () => ({
  type: DECREMENT
})
export const bannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners
})

//redux-thunk中定义的action函数
export const getHomeDataAction = dispatch => {
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    const data = res.data.data
    //网络请求获取到数据后，执行dispath将数据存入store中
    dispatch(bannersAction(data.banner.list))
  })
}

export const fetchHomeDataAction = {
  type: FETCH_HOME_DATA
}