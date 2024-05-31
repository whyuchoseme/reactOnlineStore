import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/get-restaurants";

const restaurantEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "restaurant",
  initialState: restaurantEntityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      restaurantEntityAdapter.setAll(state, payload);
    });
  },
});

export default reducer;
