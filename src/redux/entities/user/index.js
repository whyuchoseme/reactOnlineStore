import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunks/get-users";

const userEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "user",
  initialState: userEntityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      userEntityAdapter.setAll(state, payload);
    });
  },
});

export default reducer;
