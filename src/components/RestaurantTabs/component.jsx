import classNames from "classnames";
import { setStorageItem } from "../../utils/utils";
import { RestaurantTabContainer } from "../RestaurantTabContainer/container";
import styles from "./styles.module.css";

export const RestaurantTabs = ({
  restaurantsIds,
  onTabSelect,
  activeRestaurantId,
  className,
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      {restaurantsIds.map((id) => (
        <RestaurantTabContainer
          key={id}
          onClick={() => {
            onTabSelect(id);
            setStorageItem("lastActiveRestaurant", id);
          }}
          isActive={id === activeRestaurantId}
          restaurantId={id}
          className={styles.tab}
        />
      ))}
    </div>
  );
};
