import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'searchlist',
  initialState: { list: []},
  reducers: {
    getResult: (state, action: any) => {
      state.list = action.payload
    },
  },
})

export const { getResult } = searchSlice.actions
export default searchSlice.reducer
