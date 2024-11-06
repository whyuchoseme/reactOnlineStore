import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../Button/component";
import { useTheme } from "../../contexts/Theme";
import { useUserAuthorization } from "../../contexts/UserAuthorization";

export const Header = ({ className }) => {
  const { theme, switchTheme } = useTheme();
  const { isUserAuthorization, switchAuthorization } = useUserAuthorization();
  const userName = "Andrey";

  return (
    <header className={classNames(className, styles.root, styles[theme])}>
      Header
      <Button onClick={switchTheme} type="switchTheme">
        switchTheme
      </Button>
      <div
        className={classNames({
          [styles.authorization]: isUserAuthorization,
        })}
      >
        {isUserAuthorization ? (
          <div>
            Welcome, <span>{userName}!</span>
          </div>
        ) : (
          false
        )}
        <Button onClick={switchAuthorization} type="userAuthorization">
          {!isUserAuthorization ? "Login" : "Exit"}
        </Button>
      </div>
    </header>
  );
};
