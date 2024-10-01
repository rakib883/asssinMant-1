import { createSlice } from '@reduxjs/toolkit';

export const set11Slice = createSlice({
  name: 'set11Slice',
  initialState: {
    user: null
  },
  reducers: {
    userInfo: (state, action) => {
      state.user = action.payload; // Store serializable user data
    }
  }
});

export const { userInfo } = set11Slice.actions;

export default set11Slice.reducer;
