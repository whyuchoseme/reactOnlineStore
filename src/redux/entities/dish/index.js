import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./thunks/get-dishes";

const dishEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "dish",
  initialState: dishEntityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getDishes.fulfilled, (state, { payload }) => {
      dishEntityAdapter.setMany(state, payload);
    });
  },
});

export default reducer;
