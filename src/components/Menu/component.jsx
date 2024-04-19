import { Dish } from "../Dish/component";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu:</h3>
      <ul>
        {menu.map(({ id, name }) => (
          <li key={id}>
            <Dish dish={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
