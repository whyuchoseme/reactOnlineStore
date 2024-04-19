import classNames from "classnames";
import styles from "./styles.module.css";

export const Header = ({ className }) => {
  return <header className={classNames(styles.root, className)}>Header</header>;
};
