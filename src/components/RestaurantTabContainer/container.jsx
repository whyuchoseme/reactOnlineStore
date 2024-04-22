import { useSelector } from "react-redux";
import { Tab } from "../Tab/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return <Tab {...props}>{restaurant.name}</Tab>;
};
