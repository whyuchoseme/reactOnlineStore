import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./thunks/get-reviews";

const reviewEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
      reviewEntityAdapter.setMany(state, payload);
    });
  },
});

export default reducer;
