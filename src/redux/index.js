import { configureStore } from "@reduxjs/toolkit";

import dish from "./entities/dish";
import restaurant from "./entities/restaurant/";
import review from "./entities/review";
import user from "./entities/user";

export const store = configureStore({
  reducer: {
    dish,
    restaurant,
    review,
    user,
  },
});

// console.log(store.getState());
