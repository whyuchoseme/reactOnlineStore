import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/component";
import { useSelector, useStore } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import { RestaurantContainer } from "../../components/Restaurant/container";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { LOADING_STATUS } from "../../constants/loading-statuses";
import { useRequest } from "../../hooks/use-request";
import { getStorageItem } from "../../utils/utils";
// import { selectReviewIds } from "../../redux/entities/review/selectors";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const restaurantLoadingStatus = useRequest(getRestaurants);

  useEffect(() => {
    if (!activeRestaurantId && restaurantIds?.length) {
      setActiveRestaurantId(restaurantIds[0]);
    } else if (getStorageItem("lastActiveRestaurant")) {
      setActiveRestaurantId(getStorageItem("lastActiveRestaurant"));
    }
  }, [restaurantIds]);

  // const store = useStore();
  // const reviewsIds = useSelector(selectReviewIds)
  // useEffect(() => {
  //   console.log(store.getState());
  // }, [reviewsIds]);

  if (restaurantLoadingStatus !== LOADING_STATUS.finished) {
    return (
      <div
        style={{
          height: 100 + "vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 50,
        }}
      >
        Loading...
      </div>
    );
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
