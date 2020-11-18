/*
 * @Description:
 * @Author: Zhong Gang
 * @Version: 1.0.0.0
 * @Date: 2020-11-10
 * @LastEditTime: 2020-11-16 18:59:17
 * @LastEditors: Zhong Gang
 */
import React, { Children } from 'react';
import ReactDom from 'react-dom';
//history模式
import { BrowserRouter as Router,Link,Route,NavLink } from 'react-router-dom'


function Home() {

  return (
    <div>
      <h1>首页</h1>
    </div>
  )
}
function Product() {
  return (
    <div>
      <h1>产品</h1>
    </div>
  )
}
function Center() {
  return (
    <div>
      <h1>个人中心</h1>
    </div>
  )
}
function News(props) {
  console.log(props);
  return (
    <div>
      <h1>新闻页面</h1>
  <h2>{props.match.params.id}</h2>
    </div>
  )
}

class App extends React.Component {
  render() {
    let urlObjc = {
      pathname: '/me', //跳转的路径
      search: '?username=admin', //get请求的参数
      hash:'#zz',//设置的Hash值
      state: {
        msg: 'Hello World' //传入组件的数据
      }
    }
    return (
      <div id="app">
        <Router>
          <Route path="/" exact component={()=>(<div>1</div>)}></Route>
          <Route path="/me" exact component={()=>(<div>2</div>)}></Route>
          <Route path="/product"  exact component={()=>(<div>3</div>)}></Route>
        </Router>
        <Router basename="/admin">
          <div>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to={urlObjc} replace>个人中心</Link>
            <Link to="/news/1234">新闻页面</Link>
          </div>
          {/* exact 精确匹配 */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/product" exact component={Product}></Route>
          <Route path="/me" exact component={Center}></Route>
          <Route path="/news/:id" exact component={News}></Route>
        </Router>
      </div>
    )
  }
}

export default App