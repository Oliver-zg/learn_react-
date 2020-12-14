import React, { PureComponent,createRef } from 'react';

class Counter extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }


  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={() => this.increment()}>+1</button>
      </div>
    )
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
}
class App extends PureComponent {
  constructor(props) {
    super(props)
    this.titleRef = createRef()
    this.titleEl = null
    this.changeCount = createRef()
  }
  render() {
    return (
      <div>
        {/* 方法1 传入字符串 不推荐 */}
        <h2 ref="titleRef">hello world</h2>
        {/* 方法2 传入对象 官方推荐 */}
        <h2 ref={this.titleRef}>hello world</h2>
        {/* 方法3 传入函数 */}
        <h2 ref={(args) => this.titleEl = args}>hello world</h2>
        <button onClick={e => this.changeTitle()}>改变文本</button>
        <hr/>
        <Counter ref={this.changeCount}/>
        <button onClick={() => this.change()}>改变数字</button>
      </div>
    );
  }

  changeTitle() {
    //直接操作DOM
    //方法1 字符串 （不推荐）
    this.refs.titleRef.innerHTML = '你好啊世界'
    //方法2 对象方式
    this.titleRef.current.innerHTML = '你好啊啊世界'
    //
    this.titleEl.innerHTML = '你好啊啊啊世界'
  }

  change() {
    //控制其他类组件的事件  不能在函数式组件中使用ref属性
    this.changeCount.current.increment()
  }
}


export default App;