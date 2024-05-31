import { Reviews } from "./component";
import { selectRestaurantReviewsById } from "../../redux/entities/restaurant/selectors";
import { getReviews } from "../../redux/entities/review/thunks/get-reviews";
import { getUsers } from "../../redux/entities/user/thunks/get-users";
import { LOADING_STATUS } from "../../constants/loading-statuses";
import { useRequest } from "../../hooks/use-request";
import { useSelector } from "react-redux";

export const ReviewsContainer = ({ restaurantId }) => {
  const restaurantReviews = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );

  const usersLoadingStatus = useRequest(getUsers);
  const reviewsLoadingStatus = useRequest(getReviews, restaurantId);

  if (
    usersLoadingStatus !== LOADING_STATUS.finished ||
    reviewsLoadingStatus == LOADING_STATUS.loading
  ) {
    return <div>Loading Users and Reviews...</div>;
  }

  return <Reviews reviews={restaurantReviews} />;
};
