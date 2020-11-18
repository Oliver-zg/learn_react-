/*
 * @Description:
 * @Author: Zhong Gang
 * @Version: 1.0.0.0
 * @Date: 2020-11-10
 * @LastEditTime: 2020-11-16 16:15:24
 * @LastEditors: Zhong Gang
 */
import React, { Children } from 'react';
import ReactDom from 'react-dom';
import './App.css';

class ParentCom extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>插槽</h1>

        <ChildCom>
          <h1 data-index="header">上</h1>
          <h1 data-index="main">中</h1>
          <h1 data-index="footer">下</h1>
        </ChildCom>
      </div>
    );
  }
}

class RootCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1, 2, 3],
    };
  }
  render() {
    return (
      <ParentCom>
        <h1 data-index={this.state.arr[1]}>1</h1>
        <h1 data-index={this.state.arr[2]}>2</h1>
        <h1 data-index={this.state.arr[3]}>3</h1>
      </ParentCom>
    );
  }
}

class ChildCom extends React.Component {
  render() {
    let h, m, f;
    this.props.children.forEach((item, index) => {
      switch (item.props['data-index']) {
        case 'header':
          h = item;
          break;
        case 'main':
          m = item;
          break;
        case 'footer':
          f = item;
          break;
      }
    });
    return (
      <div>
        <div className="header">{h}</div>
        <div className="main">{m}</div>
        <div className="footer">{f}</div>
      </div>
    );
  }
}
ReactDom.render(<RootCom />, document.getElementById('root'));
