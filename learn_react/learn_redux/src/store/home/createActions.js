import axios  from 'axios'
import {
  CHANGE_BANNERS,
  FETCH_HOME_DATA
} from './constant'


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