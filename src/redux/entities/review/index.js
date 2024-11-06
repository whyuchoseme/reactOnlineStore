import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./thunks/get-reviews";
import { createReview } from "./thunks/create-review";

const reviewEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase(createReview.fulfilled, (state, { payload }) => {
        reviewEntityAdapter.addOne(state, payload);
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        reviewEntityAdapter.setMany(state, payload);
      });
  },
});

export default reducer;
