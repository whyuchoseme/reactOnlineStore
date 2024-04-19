import { useState } from "react";
import { Button } from "../Button/component";

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{dish} - </span>
      <Button onClick={() => setCount(count - 1)} disableb={count === 0}>
        -
      </Button>
      {count}
      <Button onClick={() => setCount(count + 1)} disableb={count === 5}>
        +
      </Button>
    </div>
  );
};
