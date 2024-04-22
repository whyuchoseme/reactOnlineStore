import { useState } from "react";
import { Layout } from "../../components/Layout/component";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import { RestaurantContainer } from "../../components/Restaurant/container";

export const MainPage = () => {
  const restaurantsIds = useSelector(selectRestaurantIds);

  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0]
  );

  return (
    <Layout>
      <RestaurantTabsContainer
        onTabSelect={setActiveRestaurantId}
        activeRestaurantId={activeRestaurantId}
      />
      {activeRestaurantId && (
        <RestaurantContainer restaurantId={activeRestaurantId} />
      )}
    </Layout>
  );
};
