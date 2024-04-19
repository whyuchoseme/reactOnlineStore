import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
