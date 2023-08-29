import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isSignedIn: false,
    userData: null,
    searchInput: " ",
    blogData: null,
  },
  reducers: {
    setSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
    setUserData: (state, action) => {
      state.isUserData = action.payload;
    },
    setSearchInput: (state, action) => {
      state.isSearchInput = action.payload;
    },
    setBlogData: (state, action) => {
      state.isBlogData = action.payload;
    },
  },
});

export const { setSignedIn, setUserData, setInput, setBlogData } =
  userSlice.actions;

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectUserInput = (state) => state.user.searchInput;
export const selectBlogData = (state) => state.user.blogData;

export default userSlice.reducer;
