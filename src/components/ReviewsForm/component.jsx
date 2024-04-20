import classNames from "classnames";
import styles from "./styles.module.css";
import { useReducer } from "react";
import { Button } from "../Button/component";
import { useTheme } from "../../contexts/Theme";

const DEFAULT_VALUE = {
  user: "",
  textReview: "",
  rating: 1,
};

const reducer = (state, action) => {
  switch (action?.type) {
    case "setUser":
      return { ...state, user: action.payload };

    case "setReview":
      return { ...state, textReview: action.payload };

    case "setRating":
      return { ...state, rating: action.payload };

    case "reset":
      return { ...DEFAULT_VALUE };

    default:
      return state;
  }
};

export const ReviewsForm = ({ onSubmit }) => {
  const { theme } = useTheme();
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  return (
    <div className={classNames(styles.root, styles[theme])}>
      <div>
        <span>User:</span>
        <input
          value={formValue.user}
          onChange={(event) =>
            dispatch({ type: "setUser", payload: event.target.value })
          }
        />
      </div>
      <div className={styles.textReview}>
        <span>Text review:</span>
        <input
          value={formValue.textReview}
          onChange={(event) =>
            dispatch({ type: "setReview", payload: event.target.value })
          }
        />
      </div>
      <div className={styles.ratingInput}>
        <span>Rating:</span>
        <input
          value={formValue.rating}
          onChange={(event) =>
            dispatch({ type: "setRating", payload: event.target.value })
          }
        />
      </div>
      <div className={styles.actionButtons}>
        <Button onClick={() => dispatch({ type: "reset" })}>Reset</Button>
        <Button onClick={onSubmit}>Submit</Button>
      </div>
    </div>
  );
};
