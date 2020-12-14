import React, { Component } from 'react';


class TabControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }
  render() {
    const { title } = this.props
    return (
      <div className="tab-control">
        <ul>
          {
            title.map((item,index) => {
              return (
                <li className={index == this.state.currentIndex ? 'active' : ''} 
                    onClick={() => {this.itemClick(index)}}>
                      {item}
                </li>) 
              
            })
          }
        </ul>
      </div>
    );
  }

  itemClick(index) {
      this.setState({
        currentIndex: index
      })

      const { itemCick } = this.props
      itemCick(index) //传给父组件数据
  }

  
}

export default TabControl;