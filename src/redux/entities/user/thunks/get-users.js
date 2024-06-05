import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds } from "../selectors";
import { selectRestaurantUsersById } from "../../restaurant/selectors";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  /*   async () => {
    const responce = await fetch("http://localhost:3001/api/users"); */
  async (restaurantId) => {
    const responce = await fetch(
      `http://localhost:3001/api/users?restaurantId=${restaurantId}`
    );

    return await responce.json();
  },
  /*   {
    condition: (_, { getState }) => !selectUserIds(getState())?.length,
  } */
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantUsers = selectRestaurantUsersById(state, restaurantId);
      const usersIds = selectUserIds(state);

      return (
        restaurantUsers &&
        restaurantUsers.some((reviewId) => !usersIds.includes(reviewId))
      );
    },
  }
);
