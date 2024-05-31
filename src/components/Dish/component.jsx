import { Button } from "../Button/component";
import { useDispatch, useSelector } from "react-redux";
import { selectDishAmountById } from "../../redux/ui/cart/selectors";
import { cartActions } from "../../redux/ui/cart";

export const Dish = ({ dish }) => {
  const amount = useSelector((state) => selectDishAmountById(state, dish.id));
  const dispath = useDispatch();
  return (
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
  );
};
