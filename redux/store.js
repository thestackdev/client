import user from '@/redux/slice/user'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: { user },
})

export default store
