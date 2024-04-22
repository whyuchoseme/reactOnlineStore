import { UserContainer } from "../User/container";

export const Review = ({ review }) => {
  return (
    <div>
      <UserContainer usersIds={review.userId} /> {review.text}
    </div>
  );
};
