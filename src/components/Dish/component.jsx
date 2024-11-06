import { Button } from "../Button/component";
import { useDispatch, useSelector } from "react-redux";
import { selectDishAmountById } from "../../redux/ui/cart/selectors";
import { cartActions } from "../../redux/ui/cart";
import { useUserAuthorization } from "../../contexts/UserAuthorization";

export const Dish = ({ dish }) => {
  const { isUserAuthorization } = useUserAuthorization();
  const amount = useSelector((state) => selectDishAmountById(state, dish.id));
  const dispath = useDispatch();

  if (!isUserAuthorization) {
    return <div>{dish.name}</div>;
  }

  return (
    isUserAuthorization && (
      <div>
        <span>{dish.name} - </span>
        <Button
          onClick={() => dispath(cartActions.decrement(dish.id))}
          disabled={amount === 0}
          size="s"
        >
          -
        </Button>
        {amount}
        <Button
          onClick={() => dispath(cartActions.increment(dish.id))}
          disabled={amount === 5}
          size="s"
        >
          +
        </Button>
      </div>
    )
  );
};
