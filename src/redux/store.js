import { configureStore } from '@reduxjs/toolkit'
import set11Slice  from './slice'

export default configureStore({
  reducer: {
    userDetils : set11Slice
  }
})