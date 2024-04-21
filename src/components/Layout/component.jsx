import classNames from "classnames/bind";
import { useTheme } from "../../contexts/Theme";
import { Footer } from "../Footer/component";
import { Header } from "../Header/component";
import styles from "./styles.module.css";
import { useBlur } from "../../contexts/Blur";

export const Layout = ({ children }) => {
  const { theme } = useTheme();
  const { isBlurActive } = useBlur();

  return (
    <div>
      <div className={classNames(styles.wrapper, styles[theme])}>
        <Header className={styles.header} />
        <main
          className={classNames(styles.content, {
            [styles.blur]: isBlurActive,
          })}
        >
          {children}
        </main>
        <Footer className={styles.footer} />
      </div>
      <div id="modal-container"></div>
    </div>
  );
};
