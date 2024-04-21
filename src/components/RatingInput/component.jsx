import { useState } from "react";
import { Button } from "../Button/component";
import styles from "./styles.module.css";
import classNames from "classnames";

export const RatingInput = ({ value, onChange, maxRating = 5, className }) => {
  const [hoveredElementIndex, setHoveredElementIndex] = useState();

  return (
    <div className={classNames(className, styles.root)}>
      {new Array(maxRating).fill(null).map((_, index) => (
        <Button
          key={index}
          type={index + 1 <= value ? "ratingActive" : "rating"}
          hovered={index <= hoveredElementIndex ? "ratingHovered" : false}
          onClick={() => onChange(index + 1)}
          onMouseEnter={() => setHoveredElementIndex(index || index + 1 <= value)}
          onMouseLeave={() => setHoveredElementIndex(null)}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
};
