import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'userInformation',
  initialState: { user: {} },
  reducers: {
    setUser: (state, action:any) => {
      console.log('actionpayload', action.payload)
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
