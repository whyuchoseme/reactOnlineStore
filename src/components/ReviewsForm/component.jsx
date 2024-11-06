import classNames from "classnames";
import styles from "./styles.module.css";
import { useReducer, useRef } from "react";
import { Button } from "../Button/component";
import { useTheme } from "../../contexts/Theme";
import { RatingInput } from "../RatingInput/component";

const DEFAULT_VALUE = {
  user: "",
  text: "",
  rating: 1,
};

const initialStyles = {
  width: "99.7%",
  height: "18rem",
  minHeight: "25rem",
  maxHeight: "33rem",
  padding: "1rem",
  resize: "vertical",
};

const reducer = (state, action) => {
  switch (action?.type) {
    case "setUser":
      return { ...state, user: action.payload };

    case "setReview":
      return { ...state, text: action.payload };

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
  const textareaRef = useRef();

  const resetInputValue = () => {
    const textarea = textareaRef.current;
    textarea.style.height = initialStyles.height;
    dispatch({ type: "reset" });
  };

  return (
    <div className={classNames(styles.root, styles[theme])}>
      <div className={styles.userName}>
        <div>User name:</div>
        <input
          value={formValue.user}
          onChange={(event) =>
            dispatch({ type: "setUser", payload: event.target.value })
          }
        />
      </div>
      <RatingInput
        className={styles.ratingInput}
        value={formValue.rating}
        onChange={(value) => dispatch({ type: "setRating", payload: value })}
      />
      <div className={styles.textReview}>
        <div>Text review:</div>
        <textarea
          ref={textareaRef}
          style={initialStyles}
          value={formValue.text}
          onChange={(event) => {
            dispatch({ type: "setReview", payload: event.target.value });
          }}
        ></textarea>
      </div>
      <div className={styles.actionButtons}>
        <Button onClick={resetInputValue}>Reset</Button>
        <Button
          onClick={() => {
            if (Object.values(formValue).some((value) => value.length < 2)) {
              alert(
                "Заполните пустые поля для публикации Вашего отзыва \nМинимальное число символов > 2"
              );
            } else {
              onSubmit({ ...formValue });
            }
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
