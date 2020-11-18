import React from 'react'

class SearchCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      result: null
    }
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="请输入查询的省份" ref="inputProvince"></input>
        <button onClick={(e)=>this.searchProvince(e)}>查询</button>
        <div>
          <h2>查询结果</h2>
          <div>
            {this.state.result}
          </div>
        </div>
      </div>
    )
  }
  
  searchProvince = (e) => {
    let val=this.refs.inputProvince.value;
    console.log(this.props.provinceObj[val]);
    if(this.props.provinceObj[val]) {
      let item = this.props.provinceObj[val];
      this.setState({
        name:item,
        result:<div>
        <p>确诊人数：{item.confirm}</p>
        <p>死亡人数：{item.dead}</p>
        <p>治愈人数：{item.heal}</p>
      </div>
      })
    }else{
      this.setState({
        result:<h2>输入错误</h2>
      })
    }
    
    console.log(val);
  }
  
}

export default SearchCom