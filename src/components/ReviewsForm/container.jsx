import { LOADING_STATUS } from "../../constants/loading-statuses";
import { useMakeRequest } from "../../hooks/use-make-request";
import { createReview } from "../../redux/entities/review/thunks/create-review";
import { ReviewsForm } from "./component";

export const ReviewsFormContainer = ({ restaurantId, closeModal }) => {
  const [saveReviewStatus, saveStatus] = useMakeRequest(createReview);

  if (
    saveReviewStatus === LOADING_STATUS.idle ||
    saveReviewStatus === LOADING_STATUS.loading
  ) {
    <div>loading...</div>;
  }

  return (
    <ReviewsForm
      onSubmit={(form) => {
        saveStatus({ restaurantId, newReview: form });
        closeModal();
      }}
    />
  );
};
