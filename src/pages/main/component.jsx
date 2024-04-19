import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { restaurants } from "../../constants/mock";
import { Layout } from "../../components/Layout/component";

export const MainPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const activeRestaurant = restaurants.find(
    ({ id }) => activeRestaurantId === id
  );

  return (
    <Layout>
      <RestaurantTabs
        restaurants={restaurants}
        onTabSelect={setActiveRestaurantId}
        activeRestaurantId={activeRestaurantId}
      />
      <Restaurant restaurant={activeRestaurant} />
    </Layout>
  );
};
