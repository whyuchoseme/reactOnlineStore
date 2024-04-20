import classNames from "classnames";
import styles from "./styles.module.css";
import { useTheme } from "../../contexts/Theme";

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  size,
  type,
}) => {
  const { theme } = useTheme();
  return (
    <button
      className={classNames(
        className,
        styles[size],
        styles[type],
        styles[theme],
        {
          [styles.disabled]: disabled,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
