/*
 * @Description: 
 * @Author: Zhong Gang
 * @Version: 1.0.0.0
 * @Date: 2020-09-13 20:05:34
 * @LastEditTime: 2020-11-10 10:53:10
 * @LastEditors: Zhong Gang
 */
import React from 'react';
import ReactDom from 'react-dom';
import './App.css'
import json from './feiyan.json'

let provinsInfo = {

}

json.data.list.forEach((item,index) => {
  if(provinsInfo[item.province] == undefined) {
      provinsInfo[item.province] = {
        "confirm": 0,
        "suspect": 0,
        "heal": 0,
        "dead": 0,
      }
  }
  provinsInfo[item.province] = {
    "confirm": provinsInfo[item.province].confirm + item.confirm,
    "suspect": provinsInfo[item.province].suspect + item.suspect,
    "heal": provinsInfo[item.province].heal + item.heal,
    "dead": provinsInfo[item.province].dead + item.dead,
  }
})

let provinsList = []

for(let key in provinsInfo ) {
  provinsInfo[key].provins = key
  provinsList.push(provinsInfo[key])
}

let provinListSort = provinsList.sort((a,b)=> {
  if(a.confirm<b.confirm) {
    return 1; //交换
  }else{
    return -1;
  }
})

class ComfirmForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      provincesData:provinListSort
    }
  }

  render() {
    let data = this.state.provincesData.map((item,index)=> {
      return (
        <tr key="index">
          <td>{item.provins}</td>
          <td>{item.confirm}</td>
          <td>{item.dead}</td>
          <td>{item.heal}</td>
        </tr>
      )
    })
    return (
      <div>
        <h1>新冠肺炎疫情</h1>
        <thead>
          <tr>
            <th>省份</th>
            <th>确诊</th>
            <th>死亡</th>
            <th>治愈</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </div>
    )
  }
}

ReactDom.render(<ComfirmForm/>,document.getElementById('root'))
