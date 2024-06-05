import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunks/get-users";

const usersEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "user",
  initialState: usersEntityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      // usersEntityAdapter.setAll(state, payload);
      usersEntityAdapter.setMany(state, payload);
    });
  },
});

export default reducer;
