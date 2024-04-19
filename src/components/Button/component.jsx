import classNames from "classnames";
import styles from "./styles.module.css";

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  size,
  type,
}) => {
  return (
    <button
      className={classNames(className, styles[size], styles[type], {
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
