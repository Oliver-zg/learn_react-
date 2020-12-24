import {CHANGE_BANNERS } from './constant';
const defaultState = {
  banners: [],
  recommends: []
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return {...state, banners: action.banners} 
      break;
    default:
      return state;
      break;
  }
}

export default reducer;
