import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT
} from './constant'

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num
})

export const subAction = (num) => ({
  type: SUB_NUMBER,
  num
})

export const increAction = () => ({
  type: INCREMENT
})
export const decreAction = () => ({
  type: DECREMENT
})


