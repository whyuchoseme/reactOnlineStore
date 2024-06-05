import { DishContainer } from "../Dish/container";
import styles from "./styles.module.css";

export const Menu = ({ menu, className }) => {
  return (
    <div className={className}>
      <h3>Menu:</h3>
      <ul>
        {menu.map((id) => (
          <li key={id} className={styles.dish}>
            <DishContainer dishId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
