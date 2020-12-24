import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT,CHANGE_BANNERS } from './constant';
const defaultState = {
  counter: 0,
  banners: [],
  recommends: []
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      //合并对象
      return { ...state, counter: state.counter + action.num };
      break;
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
      break;
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
      break;
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
      break;
    case CHANGE_BANNERS:
      return {...state, banners: action.banners} 
      break;
    default:
      return state;
      break;
  }
}

export default reducer;
