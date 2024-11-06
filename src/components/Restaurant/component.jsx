import { AddReviewButton } from "../AddReviewButton/component";
import { MenuContainer } from "../Menu/container";
import { ReviewsContainer } from "../Reviews/container";
import styles from "./styles.module.css";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2 className={styles.restaurantName}>{restaurant.name}</h2>
      <MenuContainer className={styles.menu} restaurantId={restaurant.id} />
      <ReviewsContainer
        className={styles.reviews}
        restaurantId={restaurant.id}
      />
      <AddReviewButton
        className={styles.addReviewButton}
        restaurantId={restaurant.id}
      />
    </div>
  );
};
