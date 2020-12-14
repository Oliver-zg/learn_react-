import React, { Component } from 'react';

// 创建context对象
const UserContext = React.createContext({
  nickname: 'aaa',
});

class ProfileHeader extends Component {
  render() {
    console.log(this.context);
    return (
      <div>
        <h2>用户的昵称：{this.context.nickname}</h2>
      </div>
    );
  }
}

// 设置context
ProfileHeader.contextType = UserContext;


function Profile() {
  return (
    <div>
      <ProfileHeader/>
      <il>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </il>
    </div>
  );
}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: 'ooli',
    };
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile {...this.state} />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
