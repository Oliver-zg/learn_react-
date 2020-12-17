import React, { PureComponent } from 'react';
import axios from 'axios'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }
  //发送网络请求
  async componentDidMount() {
    // try {
    //   const result = await axios({
    //     url: 'https://httpbin.org/get',
    //     params: {
    //       name: 'zg',
    //       age: 18
    //     }
    //   })
    //   console.log(result);
    // } catch (error) {
    //   //捕获异常
    // }

    //axios.all 的使用
    // const request1 = axios({
    //   url: 'https://httpbin.org/get',
    //   params: {
    //     name: 'zg',
    //     age: 18
    //   }
    // })
    // const request2 = axios({
    //   url: 'https://httpbin.org/post',
    //   data: {
    //     name: 'Oliver',
    //     age:19
    //   },
    //   method: 'post'
    // })
    
    // axios.all([request1,request2]).then(res => {
    //   console.log(res);
    // })

    //创建实例
    // const instance = axios.create({
    //   baseURL: '',
    //   timeout: 5000
    // })
    // axios({

    // })
  }

  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}


export default App;