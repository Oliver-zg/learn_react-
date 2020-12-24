import { createStore,applyMiddleware,compose } from 'redux'
import  thunkMidware from 'redux-thunk'
import createSagaMidWare from 'redux-saga'
import reducer from './reducer';
import mySaga from './saga'
//reducer 纯函数
// function reducer(state = init, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, counter: state.counter + 1 };
//       break;
//     case 'DECREMENT':
//       return { ...state, counter: state.counter - 1 };
//       break;
//     default:
//       return state;
//       break;
//   }
// }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//应用一些中间件
//1. 引入thunk 在redux中处理网络请求
//2. 创建saga
const sagaMidWare = createSagaMidWare()
const storeEnhancer = applyMiddleware(thunkMidware,sagaMidWare)

const store = createStore(reducer, /* preloadedState, */ composeEnhancers(storeEnhancer))

//必须启动saga中间件，并且传入其要监听的generator
sagaMidWare.run(mySaga)

//store
// const store = createStore(reducer,storeEnhancer);

export default store


// //订阅store的修改
// store.subscribe(() => {
//   console.log('发生了改变');
// });

// //action
// const action1 = { type: 'INCREMENT' };
// const action2 = { type: 'DECRMENT' };

// //派发
// store.dispatch('action1');
// store.dispatch('action2');
