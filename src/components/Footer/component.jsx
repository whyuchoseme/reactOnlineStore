import classNames from "classnames";
import styles from "./styles.module.css";

export const Footer = ({ className }) => {
  return <footer className={classNames(styles.root, className)}>Footer</footer>;
};
