import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../type'

const userSlice = createSlice({
  name: 'userInformation',
  initialState: { user: {} },
  reducers: {
    setUser: (state, action: { payload: IUser[]; type: string }) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
