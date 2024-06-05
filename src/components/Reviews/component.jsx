import { ReviewContainer } from "../Review/container";
import styles from "./styles.module.css";

export const Reviews = ({ reviews, className }) => {
  return (
    <div className={className}>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map((id) => (
          <li key={id} className={styles.review}>
            <ReviewContainer reviewsIds={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
