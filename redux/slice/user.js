import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    status: 'refresh',
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload
    },
    setStatus: (state, action) => {
      state.status = action.payload
    },
  },
})

export const { setUser, setStatus } = userSlice.actions
export default userSlice.reducer
