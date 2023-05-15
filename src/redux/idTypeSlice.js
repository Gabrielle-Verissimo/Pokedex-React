import { createSlice } from '@reduxjs/toolkit';

export const idTypeSlice = createSlice({
  name: 'idType',
  initialState: {
    id: '',
    existId: false,
  },
  reducers: {
    setIdType: (state, {payload}) => {
        return {...state, id: payload, existId: true}
    },
    setExistId: (state, {payload}) => {
      return {...state, existId: payload}
    }
  },
})

export const { setIdType, setExistId } = idTypeSlice.actions;

export const selectIdType = (state) => state.idType;

export default idTypeSlice.reducer;