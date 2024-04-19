import { Tab } from "../Tab/component";

export const RestaurantTabs = ({ restaurants, onTabSelect }) => {
  return (
    <div>
      {restaurants.map(({ id, name }) => (
        <Tab key={id} onClick={() => onTabSelect(id)}>
          {name}
        </Tab>
      ))}
    </div>
  );
};
