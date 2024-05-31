import { configureStore } from "@reduxjs/toolkit";
import dish from "./entities/dish";
import restaurant from "./entities/restaurant/";
import review from "./entities/review";
import user from "./entities/user";
import request from "./ui/request";
import cart from "./ui/cart";
import { loggerMiddleware } from "./middleware/logger";

export const store = configureStore({
  reducer: {
    dish,
    restaurant,
    review,
    user,
    request,
    cart,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat([loggerMiddleware]),
});

// console.log(store.getState());