import  counterReducer  from './counter/reducer'
import  homeReducer  from './home/reducer'
import {combineReducers} from 'redux' 
// function reducer(state = {}, action) {
//   console.log(state);
//   return {
//     counterInfo: counterReducer(state.counterInfo,action),
//     homeInfo: homeReducer(state.homeInfo,action)
//   }
// }

const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer
})

export default reducer;
