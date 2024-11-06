import { LOADING_STATUS } from "../../../constants/loading-statuses";

const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, id) =>
  selectRestaurantModule(state).entities[id];

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantLoadingStatus = (state) =>
  selectRestaurantModule(state).status;

export const selectIsRestaurantsLoading = (state) =>
  selectRestaurantLoadingStatus(state) === LOADING_STATUS.loading;

export const selectRestaurantMenuById = (state, id) =>
  selectRestaurantById(state, id).menu;

export const selectRestaurantReviewsById = (state, id) =>
  selectRestaurantById(state, id).reviews;

export const selectRestaurantUsersById = (state, id) =>
  selectRestaurantById(state, id).users;
