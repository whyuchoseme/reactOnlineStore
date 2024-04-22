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
          onClick={() => onTabSelect(id)}
          isActive={id === activeRestaurantId}
          restaurantId={id}
        />
      ))}
    </div>
  );
};
