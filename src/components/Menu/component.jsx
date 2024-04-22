import { DishContainer } from "../Dish/container";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu:</h3>
      <ul>
        {menu.map((id) => (
          <li key={id}>
            <DishContainer dishId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
