import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/component";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import { RestaurantContainer } from "../../components/Restaurant/container";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { LOADING_STATUS } from "../../constants/loading-statuses";
import { useRequest } from "../../hooks/use-request";
import { getStorageItem } from "../../utils/utils";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const restaurantLoadingStatus = useRequest(getRestaurants);

  useEffect(() => {
    if (!activeRestaurantId && restaurantIds?.length) {
      setActiveRestaurantId(restaurantIds[0]);
    } else {
      setActiveRestaurantId(getStorageItem("lastActiveRestaurant"));
    }
  }, [restaurantIds]);

  if (restaurantLoadingStatus !== LOADING_STATUS.finished) {
    return <Layout>Loading...</Layout>;
  }

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
