import { setStorageItem } from "../../utils/utils";
import { RestaurantTabContainer } from "../RestaurantTabContainer/container";

export const RestaurantTabs = ({
  restaurantsIds,
  onTabSelect,
  activeRestaurantId,
}) => {
  return (
    <div>
      {restaurantsIds.map((id) => (
        <RestaurantTabContainer
          key={id}
          onClick={() => {
            onTabSelect(id);
            setStorageItem("lastActiveRestaurant", id);
          }}
          isActive={id === activeRestaurantId}
          restaurantId={id}
        />
      ))}
    </div>
  );
};
