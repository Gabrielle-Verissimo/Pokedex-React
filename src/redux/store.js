import { configureStore } from '@reduxjs/toolkit';
import idTypeReducer from './idTypeSlice'

export default configureStore({
  reducer: {
    idType: idTypeReducer,
  },
})