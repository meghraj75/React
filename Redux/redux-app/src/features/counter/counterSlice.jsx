import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  //all reducer function :input mai old state leta hai sath mai action leta hai aur old state aur action ko leke nyi state bnata hai 
  reducers: {
    increment: state => {
     
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    //actions 
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer