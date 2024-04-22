import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../constants/normalized-mock";

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

const { reducer } = createSlice({
  name: "review",
  initialState,
});

export default reducer;
