import React, { PureComponent } from 'react';
// import './style.css'
// import { Button } from 'antd'
// import { PoweroffOutlined } from '@ant-design/icons';
import  CommentInput from './comment/components/CommentInput'
import  CommentItem  from './comment/components/CommentItem'
class App extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        commentList: []
      }
    }
    render() {
      return (
        <div style={{height:'700px',width:'600px'}}>
          <CommentItem 
            comments={this.state.commentList} 
            deleteItem={(index)=> this.deleteItem(index)}/>
          <CommentInput submitComment={(info) => this.getItems(info)}/>
        </div>
      );
    }

    getItems(info) {
      this.setState({
        commentList: [...this.state.commentList,info]
      })
    }

    deleteItem(index) {
      const list = [...this.state.commentList]
      list.splice(index,1)
      this.setState({
        // commentList: [...this.state.commentList].splice(index,1) //错误，splice返回是删除的那个值
        commentList: list
      })
    }

}

export default App;
