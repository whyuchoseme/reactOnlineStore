import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { restaurants } from "../../constants/mock";

export const MainPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const activeRestaurant = restaurants.find(
    ({ id }) => activeRestaurantId === id
  );

  return (
    <div>
      <RestaurantTabs
        restaurants={restaurants}
        onTabSelect={setActiveRestaurantId}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
