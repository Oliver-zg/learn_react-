import React, { PureComponent } from 'react';
import { Input,Button } from 'antd';
import '../../style.css'
import moment from 'moment'
const { TextArea } = Input;

class CommentInput extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }
  render() {
    return (
      <div>
        <TextArea rows={4} allowClear="true"  onChange={e => this.handleChange(e)}>
        </TextArea>
        <Button type="primary" onClick={() => this.addComment()}>添加评论</Button>
      </div>
    );
  }
  handleChange(e) {
    // const c = e.target.value();
    this.setState({
      content: e.target.value
    })
  }
  addComment() {
    const date = new Date()
    // console.log(date.toLocaleString);
    const commentInfo = {
      id: moment().valueOf,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      nickname: 'Oliver',
      // dateTime: date.toLocaleString('chinese',{hour12:false}),
      dateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      comment: this.state.content
    }
    //将评论传递给父组件
    this.props.submitComment(commentInfo)
  }
}



export default CommentInput;