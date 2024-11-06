import { useSelector } from "react-redux";
import { Review } from "./component";
import { selectReviewById } from "../../redux/entities/review/selectors";

export const ReviewContainer = ({ reviewsIds }) => {
  const review = useSelector((state) => selectReviewById(state, reviewsIds));

  if (!review) {
    return null;
  }

  return <Review review={review} />;
};
