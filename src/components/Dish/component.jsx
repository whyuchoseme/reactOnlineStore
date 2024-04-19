import { useState } from "react";
import { Button } from "../Button/component";

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{dish} - </span>
      <Button
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
        size="s"
      >
        -
      </Button>
      {count}
      <Button
        onClick={() => setCount(count + 1)}
        disabled={count === 5}
        size="s"
      >
        +
      </Button>
    </div>
  );
};
