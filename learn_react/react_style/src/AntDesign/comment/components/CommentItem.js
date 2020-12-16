import React, { PureComponent } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons'
import moment from 'moment'
class CommentItem extends PureComponent {
  render() {
    return (
      <div>
        {this.props.comments.map((item, index) => {
          return (
            <Comment key={item.id} 
            author={<a href="/#">{item.nickname}</a>}
            avatar={<Avatar src={item.avatar} alt="Han Solo" />}
            content={<p>{item.comment}</p>}
            datetime={<Tooltip><span>{moment(item.dateTime,'YYYY-MM-DD HH:mm:ss').fromNow()}</span></Tooltip>}
            actions={[
              <span onClick={() => this.deteleComment(index)} ><DeleteTwoTone />删除</span>
            ]}
            />
          );
        })}
      </div>
    );
  }

  deteleComment(index) {
    this.props.deleteItem(index)
  }
}

export default CommentItem;
