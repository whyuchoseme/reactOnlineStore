import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../Button/component";
import { useTheme } from "../../contexts/Theme";

export const Header = ({ className }) => {
  const { switchTheme } = useTheme();

  return (
    <header className={classNames(styles.root, className)}>
      Header
      <Button onClick={switchTheme} type="switchTheme">
        switchTheme
      </Button>
    </header>
  );
};
