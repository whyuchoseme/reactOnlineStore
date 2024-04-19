import { Tab } from "../Tab/component";

export const RestaurantTabs = ({
  restaurants,
  onTabSelect,
  activeRestaurantId,
}) => {
  return (
    <div>
      {restaurants.map(({ id, name }) => (
        <Tab
          key={id}
          onClick={() => onTabSelect(id)}
          isActive={id === activeRestaurantId}
        >
          {name}
        </Tab>
      ))}
    </div>
  );
};
