import axios from 'axios'
import { BASE_URL,TIMEOUT} from './config'
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

instance.interceptors.request.use(res => {
  return res
},err => {
  console.log('====================================');
  console.log(err);
  console.log('====================================');
})
export default instance