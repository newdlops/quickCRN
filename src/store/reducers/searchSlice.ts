import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'searchlist',
  initialState: { productSearchKeyword: ""},
  reducers: {
    setSearchKeyword: (state, action:any) => {
      state.productSearchKeyword = action.payload
    },
  },
})

export const { setSearchKeyword } = searchSlice.actions
export default searchSlice.reducer
