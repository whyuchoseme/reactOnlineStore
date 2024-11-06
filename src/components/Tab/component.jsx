import classNames from "classnames";
import { Button } from "../Button/component";
import styles from "./styles.module.css";

export const Tab = ({ children, onClick, isActive, className }) => {
  return (
    <Button
      onClick={onClick}
      size="m"
      type={isActive ? "active" : false}
      className={classNames(className, styles.root)}
    >
      {children}
    </Button>
  );
};
