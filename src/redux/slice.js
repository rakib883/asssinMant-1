import { createSlice } from '@reduxjs/toolkit';

const initialState = {
     userList: null
};

export const userSlice = createSlice({
  name: 'userSlice',  // Changed the slice name to something meaningful
  initialState,
  reducers: {
      userInfo: (state, action) => {  // Renamed the action to describe its purpose better
          state.userList = action.payload;
      }
  },
});

// Action creators are generated for each case reducer function
export const { userInfo } = userSlice.actions;

export default userSlice.reducer;
