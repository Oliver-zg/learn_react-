/*
 * @Description:
 * @Author: Zhong Gang
 * @Version: 1.0.0.0
 * @Date: 2020-11-17 09:28:33
 * @LastEditTime: 2020-11-17 11:00:10
 * @LastEditors: Zhong Gang
 */

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router,Link,Route,NavLink,Redirect, Switch } from 'react-router-dom'

function LoginInfo(props) {
  console.log(props);
  // props.loginState = 'success'
  let s = 'props.location.state.loginState'
  if(s == 'success') {
    return <Redirect to='/admin'></Redirect>
  }else{
    return <Redirect to='/login'></Redirect>
  }
}
function Admin() {
  let path = {
    pathname: '/loginInfo',
    state: {
      loginState: 'success'
    }
  }
  return (
    <div>
      <h2>用户中心</h2>
      <Link to={path}>验证</Link>
    </div>
  )
}
function Login() {
  return (
    <div>
      登录
    </div>
  )
}
class Child extends React.Component {
  render() {
   return (
     <div>
       <button onClick={this.clickEvent}>回到登录页</button>
     </div>
   ) 
  }
  clickEvent = () => {
    console.log(this.props);
    this.props.history.push('/')
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Route>
          
          </Route>
        </div>
        <Router>
          {/* Switch 同名路由只渲染第一个匹配的 */}
          <Switch>
            <Route path={['/','/login']} exact>
              <Login />
            </Route>
            <Route path='/admin' exact>
              <Admin />
            </Route>
            <Route path='/loginInfo' exact render={LoginInfo}></Route>
            <Route path='/child' exact component={Child}></Route>
          </Switch>
        </Router>
        
        
      </div>
    )
  }
}

export default App