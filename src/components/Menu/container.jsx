import { useSelector } from "react-redux";
import { selectRestaurantMenuById } from "../../redux/entities/restaurant/selectors";
import { Menu } from "./component";
import { getDishes } from "../../redux/entities/dish/thunks/get-dishes";
import { useRequest } from "../../hooks/use-request";
import { LOADING_STATUS } from "../../constants/loading-statuses";

export const MenuContainer = ({ restaurantId }) => {
  const restaurantMenu = useSelector((state) =>
    selectRestaurantMenuById(state, restaurantId)
  );

  const dishesLoadingstatus = useRequest(getDishes, restaurantId);

  if (dishesLoadingstatus === LOADING_STATUS.loading) {
    return <div>Loading Dishes...</div>;
  }

  return <Menu menu={restaurantMenu} />;
};