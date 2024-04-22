import { ReviewContainer } from "../Review/container";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map((id) => (
          <li key={id}>
            <ReviewContainer reviewsIds={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
