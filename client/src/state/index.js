import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setUserGlobal: (state, action) => {
        state.userId = action.payload;
    }
  },
});

export const { setMode, setUserGlobal } = globalSlice.actions;

export default globalSlice.reducer;
